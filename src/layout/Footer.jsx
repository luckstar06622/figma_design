import { Box, Typography, Grid, Stack, Link as MuiLink, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/footer/logo.svg';
import telegram from '../assets/footer/telegram.svg';
import x from '../assets/footer/x.svg';
import bg from '../assets/footer/footerbg.svg';

export default function Footer() {
  return (
    <Box sx={{
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ px: { xs: 2, md: 8 }, py: { xs: 4, md: 8 }, color: 'white' }}>
        <Grid container spacing={4} direction={{ md: "row", sm: "column" , xs: "column" }}>
          <Grid size={3} >
            <Stack direction="row" alignItems="center" spacing={2} mb={2} mt='80px'>
              <img src={logo} alt="Chainsecurity.io" />
            </Stack>
            <Typography variant="body2" color="rgba(255,255,255,0.7)" width={{md:"100%",xs:"300px"}}>
              We rely solely on our in-house technologies and solutions, ensuring full control, independence, and innovation without third-party dependencies.
            </Typography>
          </Grid>
          <Grid size={9}>
            <Grid container spacing={{ lg: 16, md: 4 }} sx={{ float: 'right', mr: { lg: '60px', md: '0px' } }}>
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle2" sx={{ mb: 2, color: 'rgba(255,255,255,0.7)' }}>QUICK LINKS</Typography>
                <Stack spacing={1} gap={1.2}>
                  <MuiLink href="#" underline="none" color="inherit">ALL TIME RANKINGS</MuiLink>
                  <MuiLink href="#" underline="none" color="inherit">DAILY RANKING</MuiLink>
                  <MuiLink href="#" underline="none" sx={{ color: '#ff8c32' }}>NEW LISTINGS</MuiLink>
                  <MuiLink href="#" underline="none" color="inherit">SUBMIT COIN</MuiLink>
                  <MuiLink href="#" underline="none" color="inherit">UPDATE REQUEST</MuiLink>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle2" sx={{ mb: 2, color: 'rgba(255,255,255,0.7)' }}>LEGAL</Typography>
                <Stack spacing={1} gap={1.2}>
                  <MuiLink href="#" underline="none" color="inherit">OFFICIAL VERIFICATION</MuiLink>
                  <MuiLink href="#" underline="none" color="inherit">PRIVACY POLICY</MuiLink>
                  <MuiLink href="#" underline="none" color="inherit">TERMS OF SERVICE</MuiLink>
                  <MuiLink href="#" underline="none" color="inherit">COOKIES POLICY</MuiLink>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle2" sx={{ mb: 2, color: 'rgba(255,255,255,0.7)' }}>QUICK LINKS</Typography>
                <Stack spacing={1} gap={1.2}>
                  <MuiLink component={Link} to="/ContactUs" underline="none" color="inherit">CONTACT US</MuiLink>
                  <MuiLink href="#" underline="none" color="inherit">SERVICES</MuiLink>
                  <MuiLink href="#" underline="none" color="inherit">ADVERTISE</MuiLink>
                  <MuiLink href="#" underline="none" color="inherit">BLOG</MuiLink>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ background: 'black', py: 2, px: { xs: 2, md: 8 }, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="body2" color="white">
          Copyright © {new Date().getFullYear()} , All Right Reserved
        </Typography>
        <Stack direction="row">
          <IconButton >
            <img src={telegram} alt="Telegram" style={{ width: '100%', height: '100%' }} />
          </IconButton>
          <IconButton>
            <img src={x} alt="X" style={{ width: '100%', height: '100%' }} />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
} 