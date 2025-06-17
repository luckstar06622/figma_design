import { Box, Button, Grid, Typography, Stack, Chip } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import card11 from '../assets/btrace/card11.svg';
import card22 from '../assets/btrace/card22.svg';
import logo from '../assets/product/logo.svg';
import { bholdercardData,BholderCard } from './components';
import movie from '../assets/bholder/movie.svg'
import '../css/embla.css'
import GlobalCarousel from './GlobalCarousel'
const OPTIONS = { loop: true }
const BHOLDERDATA = bholdercardData;


export default function Bholder() {
  return (
    <Stack color='white' alignItems="center" sx={{ width: '100%' }}>
      <Stack alignItems="center" alignContent="center">
        <Chip label="Btrace" sx={{ bgcolor: '#23222a', color: '#bdbdbd', p: '18px', fontSize: '16px', mb: 2 }} />
      </Stack>
      <Box sx={{ pt: 2, pb: 4 }}>
        <Stack alignItems="center">
          <Typography variant="h4" fontSize={{ md: "45px", xs: "32px" }} fontWeight="bold" align="center" sx={{ mb: '22px' }}>
            Visualizing Interactions Between<br /> <Box component="span" color="#767676">Blockchain</Box> Addresses
          </Typography>
          <Typography variant="body1" color="#bdbdbd" sx={{ mb: '22px' }}>
            A tool that visualizes the interactions between blockchain addresses
          </Typography>
          <Stack direction="row" sx={{ mb: '84px' }}>
            <Button sx={{ backgroundColor: "white", color: 'black', borderRadius: '30px', px: 4, py: 2, bgcolor: 'white', fontWeight: 600, textTransform: 'none' }}>
              Get consultation
            </Button>
            <Button color="white" sx={{ textTransform: 'none', ml: '30px' }} endIcon={<ArrowForwardIosIcon />}>About Us</Button>
          </Stack>
          <Stack>
          </Stack>
        </Stack>
      </Box>
      <Box sx={{ display: { lg: 'none', md: 'none', sm: 'block', xs: 'block' } }}>
        <GlobalCarousel slides={BHOLDERDATA} options={OPTIONS} />
      </Box>
      <Box sx={{ display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' } }}>
        <BholderCard />
      </Box>
      <Box maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={3} alignItems="center" direction={{ md: "row", sm: "column", xs: "column" }}>
          <Grid item size={6} sx={{ width: { md: "48%", xs: "100%" } }}>
            <Box component="img" src={card11} alt="Check Blockchain Address" sx={{ width: '100%' }} />
          </Grid>
          <Grid item size={6} sx={{ width: { md: "48%", xs: "100%" } }} alignItems="center">
            <Chip label="Blockchain Address" sx={{ bgcolor: '#23222a', color: '#bdbdbd', p: '17px', fontSize: '14px', mb: "20px" }} />
            <Typography variant="h4" fontWeight={700} mb={2}>Provide data visually</Typography>
            <Typography variant="body1" mb={4}>
              To simplify the perception in the graph of links between addresses, you can see the amount of sent tokens.
              If necessary, you can get details of which transactions it consists of
            </Typography>
            <Button variant="contained" endIcon={<ArrowForwardIosIcon />} sx={{ borderRadius: 8, px: 4, py: 2, bgcolor: 'white', color: 'black' }}>FIRST CHECK FREE</Button>
          </Grid>
        </Grid>
        <Grid container spacing={3} alignItems="center" direction={{ md: "row", sm: "column", xs: "column" }}>
          <Grid item size={6} sx={{ width: { md: "48%", xs: "100%" }, display: { md: "none", xs: "block" } }}>
            <Box component="img" src={card22} alt="Check Blockchain Address" sx={{ width: '100%' }} />
          </Grid>
          <Grid item size={6} sx={{ width: { md: "48%", xs: "100%" } }} alignItems="center">
            <Chip label="Blockchain Address" sx={{ bgcolor: '#23222a', color: '#bdbdbd', p: '17px', fontSize: '14px', mb: "20px" }} />
            <Typography variant="h4" fontWeight={700} mb={2}>Best Price GuaranteeWe successfully work with different types of tokens</Typography>
            <Typography variant="body1" mb={4}>
              The amount of interaction between addresses is displayed in a token or a selected unit of measure, for example USDT.
            </Typography>
            <Button variant="contained" endIcon={<ArrowForwardIosIcon />} sx={{ borderRadius: 8, px: 4, py: 2, bgcolor: 'white', color: 'black' }}>FIRST CHECK FREE</Button>
          </Grid>
          <Grid item size={6} sx={{ width: { md: "48%", xs: "100%" }, display: { md: "block", xs: "none" } }}>
            <Box component="img" src={card22} alt="Check Blockchain Address" sx={{ width: '100%' }} />
          </Grid>
        </Grid>
      </Box>
      <Stack alignItems="center" spacing={2} sx={{ mb: '47px' }}>
        <Box component="img" src={logo} alt="Chainsecurity" sx={{ mb: 2, maxWidth: '198px' }} />
        <Typography variant="h4" fontWeight="bold" align="center">Demonstration <br /> of<Box component="span" color="#767676"> Bholder’s </Box>work</Typography>
        <Typography align="center" color="#bdbdbd" sx={{ maxWidth: 700 }}>
          Enjoy a more private and secure internet, block malicious websites, stop web trackers, and monitor your data leaks all in one app.
        </Typography>
      </Stack>
      <Box>
        <Box component="img" src={movie} alt="Chainsecurity" sx={{ mb: '73px', width: '100%', height: '100%' }} />
      </Box>
    </Stack>
  );
} 