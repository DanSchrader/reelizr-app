'use client';

import Head from 'next/head';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function Home() {
    return (
        <Box component='main'>
            <Box component='section' p={2}>
                <Grid container spacing={2} justifyContent='center' alignItems='center'>
                    <Grid item xs={12} sm={6} textAlign='center'>
                        <Box 
                        component='img' 
                        src='./hero-logo.webp' 
                        alt='Business Talk im Studio'
                        width='75%'
                        height='auto'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Grid container spacing={1} textAlign='center'>
                            <Grid item xs={12}>
                                <Typography component='h2' variant='h2' color='secondary'>
                                        UNTERNEHMENSPRÄSENTATION
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography component='h1' variant='h1'>
                                        VIDEO MARKETING
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                Steigern Sie Ihren Brand-Value: Mit maßgeschneiderten Unternehmens- und Produktvideos, Drohnenaufnahmen und Podcasts fördern wir Kundenbindung und Markenbekanntheit. Entdecken Sie die Kraft der visuellen Kommunikation.
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant='contained'>Direkt loslegen</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>    
        </Box>
    )
};
