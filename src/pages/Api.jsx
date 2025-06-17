import { Box, Button, Grid, Typography, Stack, Chip } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import card from '../assets/api/card.svg';
import cardbg from '../assets/api/cardbg.svg';
import GlobalCarousel from './GlobalCarousel'
import { cardData, IssuesCard } from './components';
import '../css/embla.css'
const OPTIONS = { loop: true }
const GLOBALSLIDES = cardData;

export default function Api() {
  return (
    <Stack color='white' alignItems="center">
      <Stack alignItems="center" alignContent="center">
        <Chip label="Risk Score API" sx={{ bgcolor: '#23222a', color: '#bdbdbd', p: '18px', fontSize: '16px', mb: 2 }} />
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
          <Stack sx={{ padding: "30px", borderRadius: "28px", backgroundImage: `url(${cardbg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", width: "100%", height: "100%" }}>
            <Grid container alignItems="center" direction={{ md: "row", sm: "column", xs: "column" }}>
              <Grid item size={4} width={{ md: "50%", xs: "100%" }}>
                <Box component="img" src={card} alt="Check Blockchain Address" sx={{ width: '100%', backgroundColor:'#2a20171f' }} />
              </Grid>
              <Grid item size={8} width={{ md: "50%", xs: "100%" }}>
                <Typography variant="h5" fontWeight={700} fontSize={{ md: "32px", xs: "24px" }} mb={2}> <Box component="span" color="#767676">Various</Box> investment funds and private investors are increasingly  <Box component="span" color="#767676">considering</Box>  blockchain projects as potential investment objects.</Typography>
                <Typography variant="body1" color="#767676" mb={4}>
                  They look at the history of the blockchain project, infrastructure, community, token holders and exchanges that trade this or that token. They are interested in transparency, understanding the distribution of tokens and the availability of tools that will reduce the impact of regulatory risks on the project.
                </Typography>
              </Grid>
            </Grid>
          </Stack>
        </Stack>
      </Box>
      <Box>
        <Typography variant="h4" fontSize={{ md: "45px", xs: "32px" }} fontWeight="bold" align="center" sx={{ mb: '30px' }}>
          We offer a comprehensive approach to    AML  <Box component="span" color="#767676">implementation</Box> issues
        </Typography>
      </Box>
      <Box sx={{ mb:'100px', display: { lg: 'none', md: 'none', sm: 'block', xs: 'block' } }}>
        <GlobalCarousel slides={GLOBALSLIDES} options={OPTIONS} />
      </Box>
      <Box sx={{ mb:'100px', display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' } }}>
        <IssuesCard />
      </Box>
    </Stack>
  );
} 