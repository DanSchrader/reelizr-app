'use client';

import Head from 'next/head';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Home() {
    return (
        <>
            <Head>
                <title>
                    Reelizr
                </title>
                <meta 
                    name='description'
                    content='Reelizr: Deutschlands Top-Netzwerk-Hub für Brand Video Production. Vernetzen Sie sich mit Profis und steigern Sie Ihren Markenerfolg durch Business-Videos.'
                    key='desc'
                />
            </Head>
            <Box component='main'>
                <Typography>
                    Home
                </Typography>            
            </Box>
        </>
    )
};
