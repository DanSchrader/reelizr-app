/* import { ReactNode } from 'react'; */

export interface Page {
    title: string,
    subPages?: Page[],
    slug: string,
    id: string,
    isActive?: boolean,
};

/* export interface TabPanelProps {
    children?: ReactNode,
    index: number,
    value: number,
} */

export interface InfoCard {
    icon: JSX.Element,
    title: string,
    text: string,
    id: string,
};