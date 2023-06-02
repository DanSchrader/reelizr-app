import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function HeroSection() {
    return (

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
                                <Typography component='h3' variant='h3' color='secondary'>
                                        #REELIZR
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
                                        Willkommen bei Reelizr, Ihrer Video Marketing Agentur. 
                                        Wir verwandeln Ihre Vision in aufregendes Content Video Marketing. 
                                        Nutzen Sie mit uns für Ihr Marketing Youtube - eine der größten Suchmaschinen der Welt.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} mt={1}>
                                <Button variant='contained'>Direkt loslegen</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
    )
};