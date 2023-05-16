import { Page } from '../types';

const pages: Page[] = [
    {
        title: 'Services',
        slug: '/services',
        subPages: [{
          title: 'Brand-Video',
          slug: '/brand-video',
        },
        {
          title: 'Veranstaltungsvideos',
          slug: '/veranstaltungsvideos',
        },
        {
          title: 'Drohnenaufnahmen',
          slug: '/drohnenaufnahmen',
        },
        {
          title: 'Business-Podcasts',
          slug: '/business-podcasts',
        },
      ],
    },
    {
        title: 'Blog',
        slug: '/blog',
    },
    {
        title: 'About',
        slug: '/about', 
    },
    {
        title: 'Kontakt',
        slug: '/kontakt',
    }
];

export default pages;