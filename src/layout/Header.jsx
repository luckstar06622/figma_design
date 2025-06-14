import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Box, Button, CssBaseline, Stack } from '@mui/material';
import logo from '../assets/logo.svg';
import Telegram from '../assets/telegram.svg';
import Close from '../assets/close.svg';


export default function Header() {
  const customButtonStyle = { ":hover": { backgroundColor: "white", color: "black" } }
  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none', }}   >
      {/* <Toolbar> */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: '100%', padding: '70px' }}>

        <Stack direction="row" alignItems="center" spacing={2} component={Link} to="/Bholder">
          <img style={{maxWidth:'198px', cursor:'pointer'}} src={logo} alt="Chainsecurity.io" />
        </Stack>

        <Stack direction="row" alignItems="center" display={{ xs: 'none', md: 'flex' }} spacing={2}>

          <Button color="inherit" component={Link} to="/" sx={customButtonStyle}>
            Our Product
          </Button>
          <Button color="inherit" component={Link} to="/Academy" sx={customButtonStyle}>
            Academy
          </Button>
          <Button color="inherit" component={Link} to="/About">
            About
          </Button>
          <Button color="inherit" component={Link} to="/ContactUs">
            Contact
          </Button>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={2}>
          <Stack component={Link} to="/Btrace" alignItems="center" justifyContent="center" sx={{ cursor: 'pointer', background: "white", padding: "10px", borderRadius: "50%" }}>
            <img src={Telegram} alt="Telegram" />
          </Stack>
          <Stack component={Link} to="/Api" alignItems="center" justifyContent="center" sx={{ cursor: 'pointer', background: "rgba(46, 46, 46, 1)", padding: "10px", borderRadius: "50%" }}>
            <img src={Close} alt="Close" />
          </Stack>
        </Stack>

      </Stack>
      {/* </Toolbar> */}
    </AppBar>
  );
}