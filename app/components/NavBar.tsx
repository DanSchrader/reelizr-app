'use client';

import { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import styled from '@mui/material/styles/styled';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { Page } from '../types';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const pages: Page[] = [
    {
        title: 'Services',
        slug: '/services',
    },
    {
        title: 'Blog',
        slug: '/blog',
    },
    {
        title: 'About',
        slug: '/about', 
    },
    {
        title: 'Kontakt',
        slug: '/kontakt',
    }
];

const drawerWidth = 240;

export default function NavBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <List>
        {pages.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link href={item.slug}>
                <ListItemText primary={item.title} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
  });

  const StyledNavButton = styled(Button)({
    color: '#fefbe4'
  });

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position='sticky' component="nav">
        <StyledToolbar>
          <Button href='/'>
            <Box component='img' alt='Reelizr-Logo' src='./reelizr-logo.svg' width='120px' />
          </Button>
            <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {pages.map((item) => (
              <StyledNavButton key={item.title}>
                <Link href={item.slug}>
                  {item.title}
                </Link>
              </StyledNavButton>
            ))}
          </Box>
        </StyledToolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          anchor='right'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
