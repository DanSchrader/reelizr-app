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
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import Pages from './Pages';

const drawerWidth = 240;

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleDropdownClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <List>
        {Pages.map((item) => (
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

  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
  });

  const StyledNavButton = styled(Button)({
    color: '#fefbe4',
  });

  const StyledDropdownButton = styled(IconButton)({
    margin: 0,
  })

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
          <Box sx={{ 
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            {Pages.map((item, index) => (
              <Box key={index}>
                <StyledNavButton>
                  <Link href={item.slug}>
                    {item.title}
                  </Link>
                </StyledNavButton>
                {item.subPages 
                  ? <StyledDropdownButton 
                    key={index}
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleDropdownClick}>
                      <ArrowDropDownIcon />
                    </StyledDropdownButton> 
                  : null}
                </Box>
            ))}
            <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleDropdownClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            >
              {Pages.map((page) =>
                page.subPages
                ? page.subPages.map((subPage) => (
                  <MenuItem key={subPage.title} onClick={handleDropdownClose}>
                    <StyledNavButton>
                      <Link href={subPage.slug}>{subPage.title}</Link>
                    </StyledNavButton>
                  </MenuItem>
                ))
                : null
              )}
            </Menu>
          </Box>
        </StyledToolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
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
