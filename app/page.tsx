'use client';

import Head from 'next/head';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import HeroSection from './components/HeroSection';

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
                <Typography>
                    Steigern Sie Ihren Brand-Value: <br /> 
                    Mit maßgeschneiderten Brand-Videos, Drohnenaufnahmen und Video-Podcasts fördern wir Kundenbindung und Markenbekanntheit. <br /> 
                    Entdecken Sie die Kraft der visuellen Kommunikation.
                </Typography>    
            </Box>
        </>
    )
};
