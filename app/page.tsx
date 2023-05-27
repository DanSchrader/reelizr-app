'use client';

import Head from 'next/head';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function Home() {
    return (
        <Box component='main'>
            <Box component='section' sx={{
                padding: {
                    xs: '2rem',
                    sm: '2rem 2rem 2rem 4rem',
                    md: '2rem 2rem 2rem 4rem',
                    lg: '2rem 8rem 2rem 12rem',
                    xl: '2rem 12rem 2rem 16rem',
                }
            }}>
                <Grid 
                container 
                spacing={2} 
                sx={{
                    display: 'flex',
                    justifyContent: 'center', 
                    alignItems: 'center',
                    flexDirection: {
                        xs: 'row', 
                        sm: 'row-reverse', 
                    },
                }}>
                    <Grid item xs={12} md={6} textAlign='center'>
                        <Box 
                        component='img' 
                        src='./hero-logo.webp' 
                        alt='Reelizr-Logo'
                        width='75%'
                        height='auto'
                        sx={{
                            height:'auto',
                            width: {
                                xs: '75%',
                                sm: '50%',
                                md: '75%',
                            },
                        }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={2} sx={{
                            textAlign: {
                                xs: 'center',
                                md: 'left',
                            },
                        }}>
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
                                <Typography sx={{ 
                                    maxWidth: '80%', 
                                    margin: {
                                        xs: '0 auto',
                                        md: '0',
                                    },
                                    }}>
                                Steigern Sie Ihren Brand-Value: <br /> 
                                Mit maßgeschneiderten Brand-Videos, Drohnenaufnahmen und Video-Podcasts fördern wir Kundenbindung und Markenbekanntheit. <br /> 
                                Entdecken Sie die Kraft der visuellen Kommunikation.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} mt={1}>
                                <Button variant='contained'>Direkt loslegen</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>    
        </Box>
    )
};
