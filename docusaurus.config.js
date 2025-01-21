// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const isLocal = process.env.NODE_ENV === 'development';

function jsDateToExcelDate(jsDate) {
  const excelEpoch = new Date(1899, 11, 31);
  
  // Calculate the difference in days
  let excelDate = Math.floor((jsDate - excelEpoch) / (24 * 60 * 60 * 1000));

  return excelDate;
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Desmistificando o ChatGPT',
  tagline: 'Guia essencial para uso do ChatGPT.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://criatividade.digital',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ChatGPT/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'criatividade-digital', // Usually your GitHub org/user name.
  projectName: 'ChatGPT', // Usually your repo name.

  customFields: {
    lastBuild: jsDateToExcelDate(new Date()), // Armazena o número Excel da data atual
    bookCode: 'GPT',
  },

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  plugins: [
    [
      "docusaurus-plugin-dotenv",
      {
        path: "./.env.local",
        systemvars: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'curso',
        path: 'docs-curso',
        routeBasePath: 'curso',
        sidebarPath: './sidebarsCurso.js',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          id: 'guia',
          sidebarPath: './sidebarGuia.js',
          path: 'docs-guia',
          routeBasePath: 'guia',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        /*blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },*/
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-KEWMYSXQ89',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'ChatGPT',
        logo: {
          alt: 'Guia ChatGPT',
          src: 'img/logo.svg',
        },
        items: [
          /*{
            type: 'docSidebar',
            docsPluginId: 'guia',
            position: 'left',
            label: 'Guia',
          },*/
          {
          label: 'Guia',
          to: '/guia/apresentacao/', // Path to the version 1.0 docs
          position: 'left',
          },
          {
            label: 'Curso Explorador',
            to: '/curso/apresentacao/', // Path to the version 1.0 docs
            position: 'left',
            },          
          {
            type: 'custom-Login', 
            position: "right",
            itemProp: 44,
            anotherProp: "xyz"
          }, 
          /*{to: '/blog', label: 'Blog', position: 'left'},*/
          //{
          //  href: 'https://github.com/facebook/docusaurus',
          //  label: 'GitHub',
          //  position: 'right',
          //},
        ],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      footer: {
        style: 'dark',
        /*links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
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
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],*/
        copyright: `Copyright © ${new Date().getFullYear()} CRIATIVIDADE.digital, Editora eTrix.<br /> <small>Build: ${new Date()}</small>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
