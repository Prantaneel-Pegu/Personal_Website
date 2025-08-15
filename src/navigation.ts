import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
    links: [
        {
            text: 'Blog',
            links: [
                {
                    text: 'Blog List',
                    href: getBlogPermalink(),
                },
                {
                    text: 'Article',
                    href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
                },
                {
                    text: 'Article (with MDX)',
                    href: getPermalink('markdown-elements-demo-post', 'post'),
                },
                {
                    text: 'Category Page',
                    href: getPermalink('tutorials', 'category'),
                },
                {
                    text: 'Tag Page',
                    href: getPermalink('astro', 'tag'),
                },
            ],
        },
    ],
    actions: [{ text: 'Go Back', onclick: 'history.back()' }],
};

export const footerData = {
    //   links: [
    //     {
    //       title: 'Reach me at',
    //       links: [
    //         { text: '+91 9864 700 665', href: 'tel:+919864700665' },
    //         { text: 'contact@prantaneelpegu.com', href: 'mailto:contact@prantaneelpegu.com' },
    //       ],
    //     },
    //   ],
    secondaryLinks: [],
    socialLinks: [
        {
            ariaLabel: 'LinkedIn',
            icon: 'tabler:brand-linkedin',
            href: 'https://www.linkedin.com/in/prantaneel-pegu/',
        },
        { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/PrantaneelPegu' },
        { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/Prantaneel-Pegu' },
        { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    ],
    footNote: `
    © Prantaneel Pegu · All rights reserved.
  `,
};
