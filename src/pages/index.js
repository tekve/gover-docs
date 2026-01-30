import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/intro">
            Get Started →
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({title, description, link}) {
  return (
    <div className="col col--4">
      <div className="card margin-bottom--lg">
        <div className="card__header">
          <h3>{title}</h3>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <Link className="button button--primary button--block" to={link}>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Gover Documentation - Compliance, Risk & Governance Made Simple">
      <HomepageHeader />
      <main>
        <section className="margin-vert--xl">
          <div className="container">
            <div className="row">
              <FeatureCard
                title="📚 Getting Started"
                description="New to Gover? Learn the basics and get up and running quickly."
                link="/docs/getting-started/intro"
              />
              <FeatureCard
                title="📖 User Guide"
                description="Detailed guides for frameworks, controls, risks, documents, and tasks."
                link="/docs/user-guide/frameworks/overview"
              />
              <FeatureCard
                title="⚙️ Admin Guide"
                description="Configure your organization, manage users, and customize settings."
                link="/docs/admin-guide/organization-settings"
              />
            </div>
            <div className="row margin-top--lg">
              <FeatureCard
                title="🛡️ Framework Guides"
                description="Specific guidance for GDPR, ISO 27001, NIS2, and more."
                link="/docs/frameworks/gdpr"
              />
              <FeatureCard
                title="🤖 AI Assistant"
                description="Learn how to use Gover's AI for intelligent suggestions."
                link="/docs/user-guide/ai-assistant/overview"
              />
              <FeatureCard
                title="📊 Risk Management"
                description="Identify, assess, and treat risks with customizable scoring."
                link="/docs/user-guide/risks/overview"
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
