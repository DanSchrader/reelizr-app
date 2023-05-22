'use client';

import Head from 'next/head';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Veranstaltungsvideo() {
    return (
        <Box component='main'>
            <Box sx={{
                    margin: '10vh 5vw auto 5vw',
            }}>
                <Typography>
                    Veranstaltungsvideos
                </Typography>  
            </Box>          
        </Box>
    )
};