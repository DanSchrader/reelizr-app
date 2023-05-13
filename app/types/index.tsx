import { ReactNode } from 'react';

export interface Page {
    title: string,
    subPages?: Page[],
    slug: string,
    isActive?: boolean,
};

export interface TabPanelProps {
    children?: ReactNode,
    index: number,
    value: number,
}