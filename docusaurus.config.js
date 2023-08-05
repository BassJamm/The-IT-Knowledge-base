// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The IT KB',
  tagline: '',
  url: 'https://theitkb.co.uk',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon-book.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'TheITKB', // Usually your GitHub org/user name.
  projectName: 'KB-Project', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".

  plugins: [require.resolve('docusaurus-lunr-search')],
  
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-SYXJ4RP3B9',
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/docs/',  // Serve the docs at the site's root
          // Please change this to your repo.
        },
        blog: {
          path: 'blog',
          postsPerPage: 'ALL',
          blogSidebarTitle: 'Posts So Far',
          blogSidebarCount: 'ALL',
          showReadingTime: true, // When set to false, the "x min read" won't be shown
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
            defaultReadingTime({content, options: {wordsPerMinute: 300}}),
          routeBasePath: '/blog/',  // Serve the docs at the site's root
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'The IT Knowledge base',
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon-book.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'Welcome',
            position: 'right',
            label: 'Docs',
          },
         {
            to: 'blog',
            label: 'Blog',
            position: 'right'},
          {
            href: 'https://github.com/BassJamm',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://gist.github.com/BassJamm',
            label: 'GitHub Gists',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Helpful External Links',
            items: [
              {
                label: 'Microsoft Docs',
                href: 'https://learn.microsoft.com/en-in/docs/',
              },
              {
                label: 'Docusaurus',
                href: 'https://docusaurus.io/docs',
              },
            ],
          },
          {
            title: 'My Stuff',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/BassJamm',
              },
              {
                label: 'GitHub Gists',
                href: 'https://gist.github.com/BassJamm',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The IT Knowledge Base, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell','bicep'],
      },
      metadata: [{name: 'keywords', content: 'IT, KnowledgeBase, Microsoft, Azure, Computers'}],
    // This would become <meta name="keywords" content="cooking, blog"> in the generated HTML
    }),
};

module.exports = config;
