# Gover Documentation

Documentation site for [Gover](https://gover.io) - Compliance, Risk & Governance Made Simple.

🌐 **Live site**: [docs.gover.io](https://docs.gover.io)

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm start

# Build for production
pnpm build

# Start Finnish locale
pnpm start -- --locale fi

```

## Structure

```
docs/
├── getting-started/     # Onboarding guides
├── user-guide/          # Feature documentation
│   ├── frameworks/
│   ├── controls/
│   ├── risks/
│   ├── documents/
│   ├── tasks/
│   └── ai-assistant/
├── admin-guide/         # Administration guides
└── frameworks/          # Framework-specific guides
```

## Languages

- English (default)
- Finnish (Suomi)

## Deployment

Automatically deployed to AWS (S3 + CloudFront) on push to `main`.

## Contributing

1. Create a branch
2. Make changes
3. Submit PR
4. Merge to main triggers deployment

## Contact

- Email: info@gover.io
- Website: [gover.io](https://gover.io)
