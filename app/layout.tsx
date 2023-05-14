'use client';

import './globals.css';
import defaultTheme from './theme/defaultTheme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import type { Metadata } from 'next';
import NavBar from './components/NavBar';
// import Footer from './components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
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
