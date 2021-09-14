const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title:
    'Checkup is a framework to gather static analysis insights for your projects.',
  tagline: '',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'checkupjs', // Usually your GitHub org/user name.
  projectName: 'checkup', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Checkup',
      logo: {
        alt: 'My Site Logo',
        src: 'img/checkup-logo-white.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'introduction/why-checkup',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'doc',
          docId: 'api/cli/get-formatter',
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
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
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
