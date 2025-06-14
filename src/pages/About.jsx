import { Box, Grid, Container, Typography, Stack, Button, Chip, } from '@mui/material';
import { Company, Global, Blockchain } from './components';
import card5 from '../assets/about/card5.svg';
import marks from '../assets/about/marks.svg';

export default function About() {
  return (
    <Box sx={{ color: 'white', minHeight: '100vh', pb: 8 }}>
      {/* Top Section */}
      <Stack alignItems="center" alignContent="center">
        <Chip label="Chain Security" sx={{ bgcolor: '#23222a', color: '#bdbdbd', p: '18px', fontSize: '16px', mb: 2 }} />
      </Stack>
      <Container maxWidth="lg" sx={{ pt: 8, pb: 4 }}>

        <Company />
      </Container>
      {/* Unique Approach Section */}
      <Global />
      <Stack alignItems="center" sx={{ mb: 6 }}>
        <Button variant="contained" sx={{ borderRadius: '30px', px: 7, py: 2, bgcolor: 'white', color: 'black', fontWeight: 600, textTransform: 'none', mb: 2 }}>Ask a Question</Button>
      </Stack>
      {/* Compliance Section */}
      <Grid container spacing={5} alignItems="center" justifyContent="center" sx={{ mb: 8 }}>
        <Grid item size={6}>
          <Box>
            <img src={card5} alt="compliance" />
          </Box>
        </Grid>
        <Grid item size={6}>
          <Stack spacing={2}>
            <Box>
              <img src={marks} alt="FATF" sx={{ maxWidth: '517px' }} />
            </Box>
            <Typography variant="h4" fontWeight="bold">Compliance With Global AML/CFT Standards</Typography>
            <Typography color="#bdbdbd">
              The company’s products comply with local AML/CFT requirements, FATF recommendations, including the Travel Rule, and EU Directive 6AMLD, which aims to combat money laundering, terrorist financing and the proliferation of weapons of mass destruction.
            </Typography>
          </Stack>
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
      <Blockchain />
      <Stack alignItems="center">
        <Button variant="contained" sx={{ borderRadius: '30px', mt: '15px', px: 4, py: 1, bgcolor: 'white', color: 'black', fontWeight: 600, textTransform: 'none', fontSize: '16px' }}>See All Features</Button>
      </Stack>
    </Box>
  );
}
