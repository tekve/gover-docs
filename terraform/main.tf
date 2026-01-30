terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "eu-north-1"
}

provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}

locals {
  domain_name = "docs.gover.io"
  bucket_name = "docs-gover-io"
}

# S3 Bucket for static hosting
resource "aws_s3_bucket" "docs" {
  bucket = local.bucket_name
}

resource "aws_s3_bucket_public_access_block" "docs" {
  bucket = aws_s3_bucket.docs.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_website_configuration" "docs" {
  bucket = aws_s3_bucket.docs.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "404.html"
  }
}

# CloudFront Origin Access Control
resource "aws_cloudfront_origin_access_control" "docs" {
  name                              = "docs-gover-io-oac"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# ACM Certificate (must be in us-east-1 for CloudFront)
resource "aws_acm_certificate" "docs" {
  provider          = aws.us_east_1
  domain_name       = local.domain_name
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

# CloudFront Function for URL rewriting (append index.html to directory paths)
resource "aws_cloudfront_function" "url_rewrite" {
  name    = "docs-gover-io-url-rewrite"
  runtime = "cloudfront-js-2.0"
  publish = true
  code    = <<-EOF
function handler(event) {
  var request = event.request;
  var uri = request.uri;
  
  // If URI ends with / or has no extension, append index.html
  if (uri.endsWith('/')) {
    request.uri += 'index.html';
  } else if (!uri.includes('.')) {
    request.uri += '/index.html';
  }
  
  return request;
}
EOF
}

# CloudFront Distribution
resource "aws_cloudfront_distribution" "docs" {
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  aliases             = [local.domain_name]
  price_class         = "PriceClass_100"

  origin {
    domain_name              = aws_s3_bucket.docs.bucket_regional_domain_name
    origin_id                = "S3-${local.bucket_name}"
    origin_access_control_id = aws_cloudfront_origin_access_control.docs.id
  }

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = "S3-${local.bucket_name}"
    viewer_protocol_policy = "redirect-to-https"
    compress               = true

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.url_rewrite.arn
    }

    min_ttl     = 0
    default_ttl = 3600
    max_ttl     = 86400
  }

  custom_error_response {
    error_code         = 404
    response_code      = 404
    response_page_path = "/404.html"
  }

  custom_error_response {
    error_code         = 403
    response_code      = 404
    response_page_path = "/404.html"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.docs.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  depends_on = [aws_acm_certificate_validation.docs]
}

# S3 Bucket Policy for CloudFront
resource "aws_s3_bucket_policy" "docs" {
  bucket = aws_s3_bucket.docs.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "AllowCloudFrontServicePrincipal"
        Effect    = "Allow"
        Principal = {
          Service = "cloudfront.amazonaws.com"
        }
        Action   = "s3:GetObject"
        Resource = "${aws_s3_bucket.docs.arn}/*"
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.docs.arn
          }
        }
      }
    ]
  })
}

# Route53 - Create hosted zone for gover.io
# NOTE: After creation, update your domain registrar's nameservers to the ones output by this zone
resource "aws_route53_zone" "gover" {
  name = "gover.io"
}

# DNS Validation records for ACM
resource "aws_route53_record" "cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.docs.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = aws_route53_zone.gover.zone_id
}

resource "aws_acm_certificate_validation" "docs" {
  provider                = aws.us_east_1
  certificate_arn         = aws_acm_certificate.docs.arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]
}

# Route53 A Record pointing to CloudFront
resource "aws_route53_record" "docs" {
  zone_id = aws_route53_zone.gover.zone_id
  name    = local.domain_name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.docs.domain_name
    zone_id                = aws_cloudfront_distribution.docs.hosted_zone_id
    evaluate_target_health = false
  }
}

# Outputs
output "cloudfront_distribution_id" {
  value = aws_cloudfront_distribution.docs.id
}

output "cloudfront_domain_name" {
  value = aws_cloudfront_distribution.docs.domain_name
}

output "s3_bucket_name" {
  value = aws_s3_bucket.docs.id
}

output "website_url" {
  value = "https://${local.domain_name}"
}

output "nameservers" {
  value       = aws_route53_zone.gover.name_servers
  description = "Update your domain registrar with these nameservers"
}
