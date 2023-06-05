import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Footer() {
    return (
        <Box component='section'>
            <Paper elevation={4} >
            <Box sx={{
                    display: 'flex',
                    justifyContent: {
                        xs: 'start',
                        lg: 'center',
                    },
                }}>
                <Grid container spacing={4} sx={{
                        padding: {
                            xs: '2rem',
                            lg: '2rem 0 2rem 10vw'
                        },
                        maxWidth: {
                            lg: '80vw', // you can adjust this value as per your need
                        },
                    }}>

                    <Grid item xs={12} sm={6} lg={3} sx={{
                            textAlign: {
                            xs: 'center',
                            lg: 'left',
                            }
                        }}>
                            <Typography component='h2' variant='h2' mb={2}>Folge uns</Typography>
                            <Grid container spacing={2} sx={{
                            justifyContent: {
                                xs: 'center',
                                lg: 'left',
                                }
                            }}>
                            <Grid item>
                                <FacebookIcon fontSize="large" />
                            </Grid>
                            <Grid item>
                                <TwitterIcon fontSize="large" />
                            </Grid>
                            <Grid item>
                                <GitHubIcon fontSize="large" />
                            </Grid>
                            <Grid item>
                                <LinkedInIcon fontSize="large" />
                            </Grid>
                      </Grid>
                  </Grid>
  
                  <Grid item xs={12} sm={6} lg={3} sx={{
                      textAlign: {
                      xs: 'center',
                      lg: 'left',
                      }
                  }}>
                      <Typography component='h2' variant='h2' mb={2}>Kontakt</Typography>
                      <Grid container direction='column'>
                      <Grid item>
                          <Link href="tel: +49123456789" underline="none">
                          {'+49 123456789'}
                          </Link>
                      </Grid>
                      <Grid item>
                          <Link href="mailto: info@reelizr.de" underline="none">
                          {'info@reelizr.de'}
                          </Link>
                      </Grid>
                      </Grid>
                  </Grid>
  
                  <Grid item xs={12} sm={6} lg={3} sx={{
                      textAlign: {
                      xs: 'center',
                      lg: 'left',
                      }
                  }}
                  >
                      <Typography component='h2' variant='h2' mb={2}>Services</Typography>
                      <Grid container direction='column'>
                      <Grid item>
                          <Link href="#" underline="none">
                          {'Brand-Videos'}
                          </Link>
                      </Grid>
                      <Grid item>
                          <Link href="#" underline="none">
                          {'Veranstaltungsvideos'}
                          </Link>
                      </Grid>
                      <Grid item>
                          <Link href="#" underline="none">
                          {'Drohnenaufnahmen'}
                          </Link>
                      </Grid>
                      <Grid item>
                          <Link href="#" underline="none">
                          {'Business-Podcasts'}
                          </Link>
                      </Grid>
                      </Grid>
                  </Grid>
  
                  <Grid item xs={12} sm={6} lg={3} sx={{
                      textAlign: {
                      xs: 'center',
                      lg: 'left',
                      }
                  }}
                  >
                      <Typography component='h2' variant='h2' mb={2}>Reelizr</Typography>
                      <Grid container direction='column'>
                      <Grid item>
                          <Link  href="#" underline="none">
                          {'About'}
                          </Link>
                      </Grid>
                      <Grid item>
                          <Link  href="#" underline="none">
                          {'Blog'}
                          </Link>
                      </Grid>
                      </Grid>
                  </Grid>
              </Grid> 
              </Box> 
          </Paper>
      </Box>
    )
  };