const generatedApiSidebar = require('./api-sidebar');

module.exports = {
  guidesSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        { type: 'doc', id: 'introduction/why-checkup' },
        { type: 'doc', id: 'introduction/quickstart' },
        { type: 'doc', id: 'introduction/cli' },
        { type: 'doc', id: 'introduction/node-api' },
        { type: 'doc', id: 'introduction/config' },
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        { type: 'doc', id: 'guides/plugins' },
        {
          type: 'category',
          label: 'Authoring Tasks',
          items: [
            { type: 'doc', id: 'guides/writing-tasks' },
            { type: 'doc', id: 'guides/writing-migration-tasks' },
            { type: 'doc', id: 'guides/writing-validation-tasks' },
            { type: 'doc', id: 'guides/actions' },
            { type: 'doc', id: 'guides/analyzers' },
            { type: 'doc', id: 'guides/generating-results' },
            { type: 'doc', id: 'guides/analyzing-results' },
          ],
          collapsed: false,
        },
      ],
      collapsed: false,
    },
  ],
  apiSidebar: [].concat(
    [{ type: 'doc', id: 'api/landing' }],
    generatedApiSidebar
  ),
};
