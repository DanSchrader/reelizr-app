import { createTheme, ThemeOptions } from '@mui/material/styles';
import '@fontsource/roboto';

const baseTheme = createTheme();

const themeOptions: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#23b9c0',
        },
        secondary: {
            main: '#9943a6',
        },
        background: {
            default: '#1f1f1f',
            /* paper: '#2c2a29' */
        },
        text: {
            primary: '#fefbe4',
        }
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        h1: {
            fontSize: '1.6rem',
            '@media (min-width:600px)': {
                fontSize: '1.6rem',
            },
            [baseTheme.breakpoints.up('md')]: {
                fontSize: '2.8rem',
            },
            fontWeight: 700,
        },
        h2: {
            fontSize: '0.9rem',
            '@media (min-width:600px)': {
                fontSize: '0.9rem',
            },
            [baseTheme.breakpoints.up('md')]: {
                fontSize: '1.5rem',
            },
        },
        body1: {
            fontSize: '1rem',
            '@media (min-width:600px)': {
                fontSize: '1.1rem',
            },
            [baseTheme.breakpoints.up('md')]: {
                fontSize: '1.2rem',
            },
        }
    },
};

export default createTheme(themeOptions);