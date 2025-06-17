import { Link } from 'react-router-dom';
import * as React from 'react';
import { AppBar, Drawer, List, Box, Button, ListItem, Stack, ListItemButton } from '@mui/material';
import logo from '../assets/logo.svg';
import Telegram from '../assets/telegram.svg';
import Close from '../assets/close.svg';
import menu from '../assets/menu.svg';


export default function Header() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (inOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(inOpen);
  };
  const customButtonStyle = { ":hover": { backgroundColor: "white", color: "black" } }
  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none', }}   >
      {/* <Toolbar> */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: '100%', padding: { lg: '70px', md: '70px', xs: '20px' } }}>

        <Box onClick={toggleDrawer(true)} component="img" src={menu} alt="menu" sx={{ cursor: 'pointer', display: { xs: 'block', md: 'none' } }} />
        <Stack direction="row" alignItems="center" spacing={2} component={Link} to="/Bholder">
          <Box component="img" src={logo} alt="icon" sx={{ width: { lg: '198px', md: '198px', xs: '138px' }, cursor: 'pointer' }} />
        </Stack>

        <Stack direction="row" alignItems="center" display={{ xs: 'none', md: 'flex' }} spacing={2}>

          <Button color="inherit" component={Link} to="/OurProduct" sx={customButtonStyle}>
            Our Product
          </Button>
          <Button color="inherit" component={Link} to="/Academy" sx={customButtonStyle}>
            Academy
          </Button>
          <Button color="inherit" component={Link} to="/About">
            About
          </Button>
          <Button color="inherit" component={Link} to="/Contact">
            Contact
          </Button>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={2}>
          <Stack component={Link} to="/Btrace" alignItems="center" justifyContent="center" sx={{ width: { lg: '46px', md: '46px', xs: '32px' }, height: { lg: '46px', md: '46px', xs: '32px' }, cursor: 'pointer', background: "white", padding: "10px", borderRadius: "50%" }}>
            <img src={Telegram} alt="Telegram" />
          </Stack>
          <Stack component={Link} to="/Api" alignItems="center" justifyContent="center" sx={{ width: { lg: '46px', md: '46px', xs: '32px' }, height: { lg: '46px', md: '46px', xs: '32px' }, cursor: 'pointer', background: "rgba(46, 46, 46, 1)", padding: "10px", borderRadius: "50%" }}>
            <img src={Close} alt="Close" />
          </Stack>
        </Stack>

      </Stack>
      {/* </Toolbar> */}
      <Box sx={{ display: 'flex' }}>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <Box
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {['Our Product', 'Academy', 'About', 'Contact'].map((text) => (
                <ListItem key={text}>
                  <ListItemButton component={Link} to={`/${text.toLowerCase().replace(/\s+/g, '')}`}>{text}</ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </AppBar>
  );
}