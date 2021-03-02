module.exports = {
  title: 'MANTRA DAO Docs',
  tagline: 'Official documentation for MANTRA DAO, the community-governed DeFi platform focusing on Staking, Lending, and Governance.',
  url: 'https://mantra-dao-docs.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'MANTRA DAO', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  stylesheets: ['https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
  'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap'
  ],
  plugins: [
    require.resolve('docusaurus-lunr-search'),
    require.resolve('plugin-image-zoom')
  ],
  themeConfig: {
    navbar: {
      title: 'MANTRA DAO Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'about/intro',
          label: 'About',
          position: 'left',
        },
        {
          to: 'guides/intro',
          label: 'Guides',
          position: 'left',
        },
        {
          to: 'developers/intro',
          label: 'Devs',
          position: 'left',
        },
        {
          to: 'knowledge/intro',
          label: 'Knowledge Base',
          position: 'left',
        },
        {to: 'updates', label: 'Updates', position: 'left'},
        // {
        //   label: 'Lang',
        //   position: 'left',
        //   items: [
        //     {
        //       label: 'EN',
        //       href: '/',
        //       target: ''
        //     },
        //     {
        //       label: 'CN',
        //       href: 'cn-placeholder',
        //       target: ''
        //     },
        //     // ... more items
        //   ],
        // },
        {
          href: 'https://github.com/mantradao',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'HOME PAGE',
          items: [
            {
              label: 'About Us',
              href: 'https://mantradao.com/about-us',
            },
            {
              label: 'Key Features',
              href: 'https://mantradao.com/#key-features',
            },
            {
              label: 'Partners',
              href: 'https://mantradao.com/#partners',
            },
            {
              label: 'Roadmap',
              href: 'https://mantradao.com/#roadmap',
            },    
            {
              label: 'Governance',
              href: 'https://snapshot.page/#/mantra-dao/all',
            }, 
            {
              label: 'OM',
              href: 'https://data.mantradao.com/',
            }, 
            {
              label: 'Careers',
              href: 'https://mantradao.com/careers',
            }, 
          ],
        },
        {
          title: 'DOCUMENTS',
          items: [
            {
              label: 'Whitepaper',
              href: 'https://mantradao.com/files/MANTRA_DAO_Whitepaper.pdf',
            },
            {
              label: 'Pitch Deck',
              href: 'https://mantradao.com/files/MANTRA_DAO_PITCHDECK.pdf',
            },
            {
              label: 'Privacy Policy',
              href: 'https://mantradao.com/privacy-policy',
            },
            {
              label: 'Terms of Use',
              href: 'https://mantradao.com/terms-of-use',
            },    
          ],
        },
        {
          title: 'COMMUNITY',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Mantradao',
            },
            {
              label: 'Blog',
              href: 'https://mantradao.com/blog',
            },
            {
              label: 'Brand Assets',
              href: 'https://mantradao.com/brand-assets',
            },
            {
              label: 'Sherpas',
              href: 'https://mantradao.com/sherpas',
            }, 
            {
              label: 'Sherpawear',
              href: 'https://sherpawear.mantradao.com/',
            },     
          ],
        },
        {
          title: 'SOCIAL MEDIA',
          items: [
            {
              label: 'Facebook',
              href: 'https://facebook.com/mantradao/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/MANTRADAO',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/mantradao',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/MANTRADAO',
            },
            {
              label: 'Weibo',
              href: 'https://weibo.com/7478990664/profile?rightmod=1&wvr=6&mod=personinfo',
            },
            {
              label: 'Medium',
              href: 'https://medium.com/mantra-dao',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/c/MANTRADAO',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/mantradaoofficial/',
            },
          ],
        },
        {
          
          items: [
            {
              html: `
                <a href="https://app.mantradao.com/" target="_blank" rel="noreferrer noopener">
                  <div>
                    <div>
                      <div
                        style="margin: auto; width: 75px;"  
                      >
                        <h4 
                        style="display: inline; line-height: 20px;"
                        class="footer__title">App</h4>
                        <img 
                          style="line-height: 20px; width: 25px; margin-left: 3px; transform: translateY(2px)"
                        src="https://cdn-images-1.medium.com/max/1200/0*mXYMw2BJjXYP-6_8.png" alt="MANTRA DAO App" /></div>
                      </div>
                    
                    <img 
                      style="display: block; margin: 10px auto;"
                      src="https://cdn-images-1.medium.com/max/1200/0*fIkhleBMbuBn7ezW.png" alt="MANTRA DAO App" />
                  </div>
                </a>
              `,
            },
          ],
        },
      ],
      logo: {
        alt: 'MANTRA DAO logo',
        src: 'img/mdao_wht.svg',
        href: 'https://mantradao.com/',
      },
      copyright: `Copyright © ${new Date().getFullYear()} MANTRA DAO Foundation`,
    },
  
    // ...
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,

      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: '🌙',

        // CSS to apply to dark icon,
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: '2px',
        },

        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        lightIcon: '\u{1F602}',

        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
    // ...
  
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          path: './docs',
          routeBasePath: '/',
          editUrl:
            'https://github.com/mantradao',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://mantradao.com/blog/',
          routeBasePath: 'updates',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
