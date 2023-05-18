import { Page } from '../types';

const pages: Page[] = [
    {
        title: 'Services',
        slug: '/services',
        id: 'services',
        subPages: [{
          title: 'Brand-Video',
          slug: '/brand-video',
          id: 'brand-video',
        },
        {
          title: 'Veranstaltungsvideos',
          slug: '/veranstaltungsvideos',
          id: 'veranstaltungsvideos',
        },
        {
          title: 'Drohnenaufnahmen',
          slug: '/drohnenaufnahmen',
          id: 'drohnenaufnahmen',
        },
        {
          title: 'Business-Podcasts',
          slug: '/business-podcasts',
          id: 'business-podcasts',
        },
      ],
    },
    {
        title: 'Blog',
        slug: '/blog',
        id: 'blog',
    },
    {
        title: 'About',
        slug: '/about',
        id: 'about', 
    },
    {
        title: 'Kontakt',
        slug: '/kontakt',
        id: 'kontakt',
    }
];

export default pages;