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
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Pages from './Pages';

const drawerWidth = 240;

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerListOpen, setDrawerListOpen] = useState(false);

  const open = Boolean(anchorEl);

  const handleDropdownClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
    setDrawerListOpen(false);
  };

  const handleDrawerListClick = () => {
    setDrawerListOpen((prevState) => !prevState);
  }

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Divider />
      <List>
        {Pages.map((item) => (
          <Box key={item.id}>
            <ListItem key={item.id} disablePadding>
              <ListItemButton
              component='a'
              href={item.slug} 
              onClick={handleDrawerToggle}
              sx={{ 
                textAlign: 'flex-start',
              }}
              >
                <ListItemText primary={item.title} />
              </ListItemButton>
              {item.subPages && (drawerListOpen ? (
                <ListItemButton onClick={handleDrawerListClick}>
                  <ExpandLess />
                </ListItemButton>) : (
                <ListItemButton onClick={handleDrawerListClick}>
                  <ExpandMore />
                </ListItemButton>))}
            </ListItem>
            {item.subPages 
            ? (
              <Collapse
                in={drawerListOpen} 
                timeout="auto" 
                unmountOnExit>
                <List component="div" disablePadding>
                  {item.subPages.map((subPage) => (
                    <ListItem key={subPage.id}>
                      <ListItemButton 
                      component='a'
                      href={subPage.slug}
                      onClick={handleDrawerToggle}
                      sx={{ pl: 4 }}
                      >
                        {subPage.title}
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
              )
            : null}
          </ Box>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position='sticky' component="nav">
        <Toolbar sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
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
            {Pages.map((item) => (
              <Box key={item.id}>
                <Button 
                href={item.slug}
                sx={{
                  color: '#fefbe4',
                }}>
                  {item.title}
                </Button>
                {item.subPages 
                  ? <IconButton 
                    key={item.id}
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleDropdownClick}
                    sx={{
                      margin: 0,
                    }}
                    >
                      <ArrowDropDownIcon />
                    </IconButton> 
                  : null}
                </Box>
            ))}
            <Menu
            id='basic-menu'
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
                  <MenuItem key={subPage.id} onClick={handleDropdownClose}>
                    <Button 
                    href={subPage.slug}
                    sx={{
                      color: '#fefbe4',
                    }}>
                      {subPage.title}
                    </Button>
                  </MenuItem>
                ))
                : null
              )}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          anchor='right'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'flex', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
