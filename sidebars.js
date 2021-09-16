const apiSidebar = require('./data/api-sidebar');

module.exports = {
  guidesSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'introduction/why-checkup',
        'introduction/installation',
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
  apiSidebar: apiSidebar
};
