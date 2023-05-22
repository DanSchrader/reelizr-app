'use client';

import Head from 'next/head';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function Home() {
    return (
        <Box component='main'>
            <Box component='section' sx={{
                height: '100vh',
                overflowX: 'hidden',
                backgroundImage: 'url(./reelizr-bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Box sx={{
                    margin: '10vh 5vw auto 5vw',
                }}>
                    <Typography component='h2' variant='h6' m='0' p='0' color='secondary'>
                            UNTERNEHMENSPRÄSENTATION
                    </Typography>
                    <Typography component='h1' variant='h2' m='0' p='0'>
                            BRAND <br />VIDEO
                    </Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Und ein zweiter Satz sollte definitiv auch noch folgen.
                    </Typography>
                    <Button variant='contained'>Direkt loslegen</Button>
                </Box>
            </Box>    
        </Box>
    )
};
