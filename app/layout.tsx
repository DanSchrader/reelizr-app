'use client';

import './globals.css';
import defaultTheme from './theme/defaultTheme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import NavBar from './components/NavBar';
// import Footer from './components/Footer';

/* export const metadata = {
  title: 'Reelizr',
  description: 'Reelizr: Deutschlands Top-Netzwerk-Hub für Brand Video Production. Vernetzen Sie sich mit Profis und steigern Sie Ihren Markenerfolg durch Business-Videos.',
}; */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
    <title>
      Reelizr
    </title>
    <meta 
      name='description'
      content='Reelizr: Deutschlands Top-Netzwerk-Hub für Brand Video Production. Vernetzen Sie sich mit Profis und steigern Sie Ihren Markenerfolg durch Business-Videos.'
      key='desc'
    />
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
