import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import DiamondSharpIcon from '@mui/icons-material/DiamondSharp';
import ManageSearchSharpIcon from '@mui/icons-material/ManageSearchSharp';
import AutoStoriesSharpIcon from '@mui/icons-material/AutoStoriesSharp';
import ShareSharpIcon from '@mui/icons-material/ShareSharp';

export default function InfoSection () {
    return (
        <Box component='section'>
            <Paper elevation={4}>
                <Grid container p={2} spacing={2}>
                    <Grid container xs={12} md={6} direction='column' spacing={1}>
                        <Grid sx={{
                            textAlign: {
                                xs: 'center',
                                md: 'left',
                            }
                        }}>
                            <DiamondSharpIcon color='primary' sx={{
                                fontSize: {
                                    xs: '3rem',
                                    sm: '4rem',
                                    md: '4rem',
                                    lg: '5rem',
                                    xl: '5rem',
                                },
                            }}/>
                        </Grid>
                        <Grid sx={{
                            textAlign: {
                                xs: 'center',
                                md: 'left',
                            }
                        }}>
                            <Typography component='h2' variant='h2' color='primary'>
                                BRAND VALUE
                            </Typography>
                        </Grid>
                        <Grid sx={{
                            textAlign: {
                                xs: 'center',
                                md: 'left',
                            }
                        }}>
                            <Typography sx={{ 
                                        maxWidth: '80%', 
                                        margin: {
                                            xs: '0 auto',
                                            md: '0',
                                        },
                                        }}> 
                                Mit maßgeschneiderten Brand-Videos, Drohnenaufnahmen und Video-Podcasts fördern wir Kundenbindung und Markenbekanntheit.
                            </Typography>
                        </Grid>
                        <Grid sx={{
                            textAlign: {
                                xs: 'center',
                                md: 'left',
                            }
                        }}>
                            <Typography sx={{ 
                                        maxWidth: '80%', 
                                        margin: {
                                            xs: '0 auto',
                                            md: '0',
                                        },
                                        }}>  
                                Entdecken Sie die Kraft der visuellen Kommunikation.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} md={6} direction='column' spacing={1} p={2}>
                        <Grid sx={{
                            textAlign: {
                                xs: 'center',
                                md: 'left',
                            }
                        }}>
                            <ManageSearchSharpIcon color='primary' sx={{
                                fontSize: {
                                    xs: '3rem',
                                    sm: '4rem',
                                    md: '4rem',
                                    lg: '5rem',
                                    xl: '5rem',
                                },
                            }}/>
                        </Grid>
                        <Grid sx={{
                            textAlign: {
                                xs: 'center',
                                md: 'left',
                            }
                        }}>
                            <Typography component='h2' variant='h2' color='primary'>
                                SEO FOKUS
                            </Typography>
                        </Grid>
                        <Grid sx={{
                            textAlign: {
                                xs: 'center',
                                md: 'left',
                            }
                        }}>
                            <Typography sx={{ 
                                        maxWidth: '80%', 
                                        margin: {
                                            xs: '0 auto',
                                            md: '0',
                                        },
                                        }}> 
                                Mit gezielten SEO-Strategien, Keyword-Optimierung und datengesteuerten Analysen steigern wir Ihr Suchmaschinen-Ranking und Ihre Online-Präsenz.
                            </Typography>
                        </Grid>
                        <Grid sx={{
                            textAlign: {
                                xs: 'center',
                                md: 'left',
                            }
                        }}>
                            <Typography sx={{ 
                                        maxWidth: '80%', 
                                        margin: {
                                            xs: '0 auto',
                                            md: '0',
                                        },
                                        }}>  
                                Vertrauen Sie auf unser Know-how und lassen Sie Ihr Unternehmen online glänzen.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} md={6} direction='column' spacing={1} p={2}>
                        <Grid sx={{
                            textAlign: {
                                xs: 'center',
                                md: 'left',
                            }
                        }}>
                            <AutoStoriesSharpIcon color='primary' sx={{
                                fontSize: {
                                    xs: '3rem',
                                    sm: '4rem',
                                    md: '4rem',
                                    lg: '5rem',
                                    xl: '5rem',
                                },
                            }}/>
                        </Grid>
                        <Grid sx={{
                            textAlign: {
                                xs: 'center',
                                md: 'left',
                            }
                        }}>
                            <Typography component='h2' variant='h2' color='primary'>
                                STORYTELLING EXPERTISE
                            </Typography>
                        </Grid>
                        <Grid sx={{
                            textAlign: {
                                xs: 'center',
                                md: 'left',
                            }
                        }}>
                            <Typography sx={{ 
                                        maxWidth: '80%', 
                                        margin: {
                                            xs: '0 auto',
                                            md: '0',
                                        },
                                        }}> 
                                Mit kreativen Video-Inhalten, eindringlichen Geschichten und emotionalem Storytelling wecken wir Interesse und Emotionen bei Ihrer Zielgruppe. Entdecken Sie die Wirkung von erzählten Geschichten in bewegten Bildern.
                            </Typography>
                        </Grid>
                        <Grid sx={{
                            textAlign: {
                                xs: 'center',
                                md: 'left',
                            }
                        }}>
                            <Typography sx={{ 
                                        maxWidth: '80%', 
                                        margin: {
                                            xs: '0 auto',
                                            md: '0',
                                        },
                                        }}>  
                                Mit uns wird Ihre Marke zur Erzählung, die in Erinnerung bleibt.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} md={6} direction='column' spacing={1} p={2}>
                        <Grid sx={{
                            textAlign: {
                                xs: 'center',
                                md: 'left',
                            }
                        }}>
                            <ShareSharpIcon color='primary' sx={{
                                fontSize: {
                                    xs: '3rem',
                                    sm: '4rem',
                                    md: '4rem',
                                    lg: '5rem',
                                    xl: '5rem',
                                },
                            }}/>
                        </Grid>
                        <Grid sx={{
                            textAlign: {
                                xs: 'center',
                                md: 'left',
                            }
                        }}>
                            <Typography component='h2' variant='h2' color='primary'>
                            SOCIAL MEDIA DOMINANZ
                            </Typography>
                        </Grid>
                        <Grid sx={{
                            textAlign: {
                                xs: 'center',
                                md: 'left',
                            }
                        }}>
                            <Typography sx={{ 
                                        maxWidth: '80%', 
                                        margin: {
                                            xs: '0 auto',
                                            md: '0',
                                        },
                                        }}> 
                                Mit innovativen Social-Media-Kampagnen, viralem Content und gezieltem Community Management vergrößern wir Ihre digitale Reichweite. Entdecken Sie die Chancen der Social Media Welt für Ihr Unternehmen.
                            </Typography>
                        </Grid>
                        <Grid sx={{
                            textAlign: {
                                xs: 'center',
                                md: 'left',
                            }
                        }}>
                            <Typography sx={{ 
                                        maxWidth: '80%', 
                                        margin: {
                                            xs: '0 auto',
                                            md: '0',
                                        },
                                        }}>  
                                Mit uns erreichen Sie Ihr Publikum dort, wo es am aktivsten ist.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}