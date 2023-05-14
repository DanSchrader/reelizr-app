'use client';

import Head from 'next/head';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Home() {
    return (
        <>
            <Head>
                <title>Reelizr</title>
            </Head>
            <Box component='main'>
                <Typography>
                    Home
                </Typography>            
            </Box>
        </>
    )
};
