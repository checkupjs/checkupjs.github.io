const apiSidebar = require('./api-sidebar');

module.exports = {
  guidesSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        { type: 'doc', id: 'introduction/why-checkup' },
        { type: 'doc', id: 'introduction/getting-started' },
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
  apiSidebar,
};
