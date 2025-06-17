import { Box, Grid, Container, Typography, Stack, Button, Chip, } from '@mui/material';
import card5 from '../assets/about/card5.svg';
import marks from '../assets/about/marks.svg';
import EmblaCarousel from './EmblaCarousel'
import GlobalCarousel from './GlobalCarousel'
import { Company, Global, Blockchain, blockchainData, globalData } from './components';
import '../css/embla.css'
const OPTIONS = { loop: true }
const GLOBALSLIDES = globalData;
const SLIDES = blockchainData;

export default function About() {
  return (
    <Box>
      {/* Top Section */}
      <Stack alignItems="center" alignContent="center">
        <Chip label="Chain Security" sx={{ bgcolor: '#23222a', color: '#bdbdbd', p: '18px', fontSize: '16px', mb: 2 }} />
      </Stack>
      <Container maxWidth="lg" sx={{ pt: 8, pb: 4 }}>
        <Company />
        {/* Bottom Section */}
        <Box textAlign="center" mb='186px'>
        </Box>
        <Box sx={{ display: { lg: 'none', md: 'none', sm: 'block', xs: 'block' } }}>
          <GlobalCarousel slides={GLOBALSLIDES} options={OPTIONS} />
        </Box>
        <Box sx={{ display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' } }}>
          <Global />
        </Box>
      </Container>
      <Stack alignItems="center" sx={{ mb: 6 }}>
        <Button variant="contained" sx={{ borderRadius: '30px', px: 7, py: 2, bgcolor: 'white', color: 'black', fontWeight: 600, textTransform: 'none', mb: 2 }}>Ask a Question</Button>
      </Stack>
      {/* Compliance Section */}
      <Grid sx={{ p: 3 }} container spacing={2} alignItems="center" direction={{ md: "row", sm: "column", xs: "column" }}>
        <Grid item size={6} sx={{ width: { md: "48%", xs: "100%" } }}>
          <Box component="img" src={card5} alt="Check Blockchain Address" sx={{ width: '100%' }} />
        </Grid>
        <Grid item size={6} sx={{ width: { md: "48%", xs: "100%" } }}>
          <img src={marks} alt="FATF" sx={{ maxWidth: '517px' }} />
          <Typography variant="h4" fontWeight={700} mb={2}>Compliance With Global AML/CFT Standards</Typography>
          <Typography variant="body1" mb={4}>
            The company’s products comply with local AML/CFT requirements, FATF recommendations, including the Travel Rule, and EU Directive 6AMLD, which aims to combat money laundering, terrorist financing and the proliferation of weapons of mass destruction.
          </Typography>
        </Grid>
      </Grid>
      {/* Tools Section */}
      <Stack alignItems="center" spacing={2} sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" align="center">
          <Box component="span" color="#bdbdbd">Chainsecurity</Box> Tools Make<br />Blockchain Safer
        </Typography>
        <Typography color="#bdbdbd" align="center" sx={{ maxWidth: 700 }}>
          Enjoy a more private and secure internet, block malicious websites, stop web trackers, and monitor your data leaks all in one app.
        </Typography>
      </Stack>
      <Box sx={{ display: { lg: 'none', md: 'block', sm: 'block', xs: 'block' } }}>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </Box>
      <Box sx={{ display: { lg: 'block', md: 'none', sm: 'none', xs: 'none' } }}>
        <Blockchain />
      </Box>
      <Stack alignItems="center" mb='100px'>
        <Button variant="contained" sx={{ borderRadius: '30px', mt: '32px', px: 4, py: 1, bgcolor: 'white', color: 'black', fontWeight: 600, textTransform: 'none', fontSize: '16px' }}>See All Features</Button>
      </Stack>
    </Box>
  );
}
