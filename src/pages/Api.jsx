import { Box, Button, Grid, Typography, Stack, Chip } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import card from '../assets/api/card.svg';
import cardbg from '../assets/api/cardbg.svg';
import cardmark from '../assets/about/cardmark.svg';
import { globalstyle } from './components';

export default function Api() {
  const cardData = [
    {
      title: 'Checking thousands of wallets instantly',
      content: 'The speed requirements for AML verification are high. That is why we offer our clients the opportunity to obtain the risk score for a wallet via the API.'
    },
    {
      title: 'Integration, documentation, support',
      content: 'Our programmers will assist in integration and, if necessary, adapt an algorithm for assessing the riskiness of certain funds/wallets to your compliance standards.'
    },
    {
      title: 'Making the blockchain transparent',
      content: 'The speed requirements for AML verification are high. That is why we offer our clients the opportunity to obtain the risk score for a wallet via the API.'
    },
  ];
  return (
    <Stack color='white' alignItems="center" sx={{ width: '100%' }}>
      <Stack alignItems="center" alignContent="center">
        <Chip label="Risk Score API" sx={{ bgcolor: '#23222a', color: '#bdbdbd', p: '18px', fontSize: '16px', mb: 2 }} />
      </Stack>
      <Box sx={{ pt: 2, pb: 4 }}>
        <Stack alignItems="center">
          <Typography variant="h4" fontWeight="bold" align="center" sx={{ mb: '22px' }}>
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
          <Box sx={{ backgroundImage: `url(${cardbg})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', width: '100%', height: '100%' }}>
            <Grid container alignItems="center">
              <Grid item size={4}>
                <Box component="img" src={card} alt="Check Blockchain Address" sx={{ width: '100%' }} />
              </Grid>
              <Grid item size={8}>
                <Typography variant="h5" fontWeight={700} fontSize="32px" mb={2}> <Box component="span" color="#767676">Various</Box> investment funds and private investors are increasingly  <Box component="span" color="#767676">considering</Box>  blockchain projects as potential investment objects.</Typography>
                <Typography variant="body1" color="#767676" mb={4}>
                  They look at the history of the blockchain project, infrastructure, community, token holders and exchanges that trade this or that token. They are interested in transparency, understanding the distribution of tokens and the availability of tools that will reduce the impact of regulatory risks on the project.
                </Typography>
              </Grid>
            </Grid>
            {/* <Box component="img" src={cardbg} alt="Check Blockchain Address" sx={{ width: '100%', position:'absolute', top:0, left:0, zIndex:0 }} /> */}
          </Box>
        </Stack>
      </Box>
      <Box>
        <Typography variant="h4" fontWeight="bold" align="center" sx={{ mb: '30px' }}>
          We offer a comprehensive approach to <br /> AML  <Box component="span" color="#767676">implementation</Box> issues
        </Typography>
      </Box>
      <Grid container spacing={0} justifyContent="center" sx={{ mb: '100px' }}>
        {cardData.map((item, index) => (
          <Grid key={index} size={4} md={4}>
            <Box sx={globalstyle}>
              <img src={cardmark} alt="icon" style={{ width: 62, marginBottom: 85 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>{item.title}</Typography>
              <Typography color="#bdbdbd">
                {item.content}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
} 