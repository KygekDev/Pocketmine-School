module.exports = {
  title: 'PocketMine School',
  tagline: 'A Website That Teaches You About PocketMine Plugin Development',
  url: 'https://pocketmineschool.kygekteam.org/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'TeamUltraSoft', // Usually your GitHub org/user name.
  projectName: 'Pocketmine-School', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: '🌙',
        lightIcon: '\u2600',
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: '2px',
        },
        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Pocketmine School',
        src: 'img/pocketmineschool.png',
        srcDark: 'img/pocketmineschool-wbg.png',
      },
      items: [
        
        {to: 'tutorials/', label: 'Tutorials', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Tutorials',
          items: [
            {
              label: 'How to make a Plugin',
              to: 'tutorials/htmap/introduction',
            },
            {
              label: 'How to use FormAPI',
              to: 'tutorials/htufa/introduction',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'UltraSoft Discord',
              href: 'https://discord.gg/EvUyyS7',
            },
            {
              label: 'KygekTeam Discord',
              href: 'https://discord.gg/CXtqUZv',
            },
          ],
        },
        {
          title: 'Other Links',
          items: [
            {
              label: 'Source Code',
              href: 'https://github.com/KygekTeam/Pocketmine-School',
            },
            {
              label: 'KygekTeam Website',
              href: 'https://kygekteam.org',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} UltraSoft. Currently maintained by KygekTeam.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/tutorials',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/KygekTeam/Pocketmine-School/tree/master',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
