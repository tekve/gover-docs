// @ts-check
import { themes as prismThemes } from 'prism-react-renderer'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gover Documentation',
  tagline: 'Compliance, Risk & Governance Made Simple',
  favicon: 'img/favicon.svg',
  url: 'https://docs.gover.io',
  baseUrl: '/',
  organizationName: 'tekve',
  projectName: 'gover-docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fi'],
    localeConfigs: {
      en: { label: 'English', htmlLang: 'en-US' },
      fi: { label: 'Suomi', htmlLang: 'fi-FI' },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/tekve/gover-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/gover-logo.svg',
      navbar: {
        title: 'Gover',
        logo: {
          alt: 'Gover Logo',
          src: 'img/gover-logo-compact.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://app.gover.io',
            label: 'Go to App',
            position: 'right',
          },
          {
            href: 'https://github.com/tekve/gover-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              { label: 'Getting Started', to: '/docs/getting-started/intro' },
              { label: 'User Guide', to: '/docs/user-guide/frameworks/overview' },
              { label: 'Admin Guide', to: '/docs/admin-guide/organization-settings' },
            ],
          },
          {
            title: 'Frameworks',
            items: [
              { label: 'GDPR', to: '/docs/frameworks/gdpr' },
              { label: 'ISO 27001', to: '/docs/frameworks/iso-27001' },
              { label: 'NIS2', to: '/docs/frameworks/nis2' },
            ],
          },
          {
            title: 'Company',
            items: [
              { label: 'Gover App', href: 'https://app.gover.io' },
              { label: 'Tekve', href: 'https://tekve.fi' },
              { label: 'Support', href: 'mailto:info@gover.io' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tekve Oy. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
}

export default config
