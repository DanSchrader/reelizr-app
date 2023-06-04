import InfoCards from './InfoCards';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function InfoSection () {
    return (
        <Box component='section'>
            <Paper elevation={4}>
                <Grid container p={2} spacing={2}>
                    {InfoCards.map((card) => (
                        <Grid key={card.id} item xs={12} md={6} lg={3}>
                            <Grid container direction='column' spacing={1}>
                                <Grid item sx={{ textAlign: 'center' }}>
                                    {card.icon}
                                </Grid>
                                <Grid item sx={{ textAlign: 'center' }}>
                                    {<Typography component='h2' variant='h2' color='primary'>
                                        {card.title}
                                    </Typography>}
                                </Grid>
                                <Grid item sx={{ textAlign: 'center' }}>
                                    <Typography> 
                                        {card.text}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </Box>
    )
};