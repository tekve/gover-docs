/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/intro',
        'getting-started/quick-start',
        'getting-started/key-concepts',
      ],
    },
    {
      type: 'category',
      label: 'User Guide',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Frameworks',
          items: [
            'user-guide/frameworks/overview',
            'user-guide/frameworks/adding-frameworks',
            'user-guide/frameworks/requirements',
            'user-guide/frameworks/readiness-tracking',
          ],
        },
        {
          type: 'category',
          label: 'Controls',
          items: [
            'user-guide/controls/overview',
            'user-guide/controls/creating-controls',
            'user-guide/controls/mapping',
            'user-guide/controls/testing',
            'user-guide/controls/categories',
          ],
        },
        {
          type: 'category',
          label: 'Risks',
          items: [
            'user-guide/risks/overview',
            'user-guide/risks/risk-register',
            'user-guide/risks/risk-assessments',
            'user-guide/risks/risk-treatment',
            'user-guide/risks/heatmap',
            'user-guide/risks/formulas',
          ],
        },
        {
          type: 'category',
          label: 'Documents',
          items: [
            'user-guide/documents/overview',
            'user-guide/documents/uploading',
            'user-guide/documents/editor',
            'user-guide/documents/mapping',
          ],
        },
        {
          type: 'category',
          label: 'Tasks',
          items: [
            'user-guide/tasks/overview',
            'user-guide/tasks/kanban',
            'user-guide/tasks/list-view',
            'user-guide/tasks/statuses',
          ],
        },
        {
          type: 'category',
          label: 'AI Assistant',
          items: [
            'user-guide/ai-assistant/overview',
            'user-guide/ai-assistant/chat',
            'user-guide/ai-assistant/suggestions',
            'user-guide/ai-assistant/best-practices',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Admin Guide',
      collapsed: true,
      items: [
        'admin-guide/organization-settings',
        'admin-guide/workspace-settings',
        'admin-guide/user-management',
        'admin-guide/content-hub',
      ],
    },
    {
      type: 'category',
      label: 'Framework Guides',
      collapsed: true,
      items: [
        'frameworks/gdpr',
        'frameworks/nis2',
        'frameworks/iso-27001',
        'frameworks/kybermittari',
        'frameworks/cra',
        'frameworks/iso-45001',
        'frameworks/iso-9001',
        'frameworks/iso-14001',
        'frameworks/iso-42001',
      ],
    },
  ],
}

export default sidebars
