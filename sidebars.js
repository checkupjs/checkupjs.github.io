module.exports = {
  guidesSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'introduction/why-checkup',
        'introduction/getting-started',
        'introduction/configuration',
        'introduction/cli',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/plugins',
        'guides/tasks',
        'guides/analyzers',
        'guides/analyzing-results',
      ],
    },
  ],
  apiSidebar: [
    {
      type: 'category',
      label: 'API Reference',
      items: ['api/cli/get-formatter', 'api/cli/checkup-task-runner'],
    },
  ],
};
