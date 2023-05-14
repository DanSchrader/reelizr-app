import { createTheme, ThemeOptions } from '@mui/material/styles';
import '@fontsource/roboto';

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
            paper: '#2c2a29'
        },
        text: {
            primary: '#fefbe4',
        }
    },
    typography: {
        fontFamily: "'Roboto', 'sans-serif'",
    },
};

export default createTheme(themeOptions);