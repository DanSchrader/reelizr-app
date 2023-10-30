'use client';

import './globals.css';
import defaultTheme from './theme/defaultTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <Container component='body' maxWidth='md'>
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <NavBar />
          <Box component='main'>
            {children}
          </Box>
          <Footer />
        </ThemeProvider>
      </Container>
    </html>
  );
};
