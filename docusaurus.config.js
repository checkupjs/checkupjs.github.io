const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Checkupjs',
  tagline: '',
  url: 'https://checkupjs.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'checkupjs',
  projectName: 'checkupjs.github.io',
  trailingSlash: false,
  themeConfig: {
    gtag: {
      trackingID: 'G-XE211D585F',
    },
    algolia: {
      apiKey: '18cc0f19dced6db06de58934f2cc8d08',
      indexName: 'checkupjs',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: 'Checkup',
      logo: {
        alt: 'checkup.js',
        src: 'img/checkup-logo.jpg',
        srcDark: 'img/checkup-logo-white.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'introduction/quickstart',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'doc',
          docId: 'api/landing',
          position: 'left',
          label: 'API',
        },
        {
          href: 'https://github.com/checkupjs/checkup',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/introduction/why-checkup',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/checkup',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/checkup',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/checkup',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/checkupjs/checkup',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CheckupJS. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/checkupjs/checkup/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/checkupjs/checkup/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
