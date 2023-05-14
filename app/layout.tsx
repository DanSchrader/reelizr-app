'use client';

import './globals.css';
import defaultTheme from './theme/defaultTheme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Head from 'next/head';
import NavBar from './components/NavBar';
// import Footer from './components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <Head>
        <title>Reelizr</title>
      </Head>
      <body>
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};
