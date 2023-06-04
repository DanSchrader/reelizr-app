import { InfoCard } from '../types';
import DiamondSharpIcon from '@mui/icons-material/DiamondSharp';
import ManageSearchSharpIcon from '@mui/icons-material/ManageSearchSharp';
import AutoStoriesSharpIcon from '@mui/icons-material/AutoStoriesSharp';
import ShareSharpIcon from '@mui/icons-material/ShareSharp';

const responsiveIcon = {fontSize: { xs: "3rem", md: "4rem"}};

const diamond = <DiamondSharpIcon color='primary' sx={ responsiveIcon } />;
const search = <ManageSearchSharpIcon color='primary' sx={ responsiveIcon } />;
const book = <AutoStoriesSharpIcon color='primary' sx={ responsiveIcon } />;
const share = <ShareSharpIcon color='primary' sx={ responsiveIcon } />;

const InfoCards: InfoCard[] = [
    {
        icon: diamond,
        title: 'BRAND VALUE',
        text: 'Mit maßgeschneiderten Brand-Videos, Drohnenaufnahmen und Video-Podcasts fördern wir Kundenbindung und Markenbekanntheit.',
        id: 'brand-value',
    },
    {
        icon: search,
        title: 'SEO FOKUS',
        text: 'Mit gezielten SEO-Strategien, Keyword-Optimierung und datengesteuerten Analysen steigern wir Ihr Suchmaschinen-Ranking und Ihre Online-Präsenz.',
        id: 'seo-fokus',
    },
    {
        icon: book,
        title: 'STORYTELLING',
        text: 'Mit kreativen Video-Inhalten, eindringlichen Geschichten und emotionalem Storytelling wecken wir Interesse und Emotionen bei Ihrer Zielgruppe.',
        id: 'storytelling-expertise',
    },
    {
        icon: share,
        title: 'SOCIAL MEDIA',
        text: 'Mit innovativen Social-Media-Kampagnen, viralem Content und gezieltem Community Management vergrößern wir Ihre digitale Reichweite.',
        id: 'social-media-dominanz',
    },
];

export default InfoCards;