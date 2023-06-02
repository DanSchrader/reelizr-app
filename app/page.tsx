'use client';

import Head from 'next/head';
import Box from '@mui/material/Box';

import HeroSection from './components/HeroSection';
import InfoSection from './components/InfoSection';

export default function Home() {
    return (
        <>
            <Head>
                <title>Reelizr</title>
                <meta 
                    name='description'
                    content='Deutschlands Top-Netzwerk-Hub für Brand Video Production. Vernetzen Sie sich mit Profis und steigern Sie Ihren Markenerfolg durch Business-Videos.'
                    key='desc'
                />
                <meta 
                    property='og:title' 
                    content='Reelizr' />
                <meta
                    property='og:description'
                    content='Deutschlands Top-Netzwerk-Hub für Brand Video Production. Vernetzen Sie sich mit Profis und steigern Sie Ihren Markenerfolg durch Business-Videos.'
                />
                <link rel='icon' href='/favicon.ico' sizes='any'/>
            </Head>
            <Box component='main'>
                <HeroSection />
                <InfoSection />  
            </Box>
        </>
    )
};
