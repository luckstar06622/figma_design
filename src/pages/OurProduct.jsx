import { Card, Box, Grid, Container, Typography, Stack, Chip, Button } from '@mui/material';
import cardProduct from '../assets/product/cardProduct.svg';
import cardGroup from '../assets/product/cardGroup.svg';
import productCardBg from '../assets/product/productbg.svg';
import icon19 from '../assets/product/icon19.svg';
import icon20 from '../assets/product/icon20.svg';
import icon21 from '../assets/product/icon21.svg';
import Groupbg from '../assets/Groupbg.svg';
import logo from '../assets/product/logo.svg';
import icon from '../assets/btrace/icon.svg';
import { Company, Global, Blockchain, blockchainData, globalData,moneycardstyle } from './components';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EmblaCarousel from './EmblaCarousel'
import GlobalCarousel from './GlobalCarousel'
import '../css/embla.css'
import hoverchain from '../assets/hover/hoverchain.svg';
import hovergroupbg from '../assets/hover/hovergroupbg.svg';

const OPTIONS = { loop: true }
const SLIDES = blockchainData;
const GLOBALSLIDES = globalData;

const chainsecuritydata = [
  {
    content: 'Assess the risks of interaction with an address'
  },
  {
    content: 'Set sources of crypto funds on the address'
  },
  {
    content: 'Track the movement of stolen crypto assets'
  },
  {
    content: 'Explore de-anonymized addresses in the graph of connections'
  }
]

export default function OurProduct() {


  return (
    <Stack>
      <Stack alignItems="center" alignContent="center">
        <Chip label="Chain Security" sx={{ bgcolor: '#23222a', color: '#bdbdbd', p: '18px', fontSize: '16px', mb: 2 }} />
      </Stack>
      <Box align="center">
        <Typography sx={{ color: "white" }} fontSize={{ md: "45px", xs: "32px" }} variant="h3" gutterBottom>
          Check your crypto<br />walet-protect your funds!
        </Typography>
        <Typography sx={{ color: "white", paddingTop: "10px" }} variant="subtitle1" gutterBottom>
          Chain Security is a technology company, speakers at leading industry exhibitions
          <br /> on blockchain technologies, big data and information security, investigations of
          <br />crypto fraud cases around the world.
        </Typography>
      </Box>
      <Box sx={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
        <Box>
          <img style={{ width: "100%", height: "100%", paddingTop: "112px" }} src={productCardBg} alt="productCardBg" />
        </Box>
        <Box sx={{ position: 'absolute', top: { md: '-33px', sm: 0, xs: 0 }, left: { md: 0, sm: 0, xs: -260 }, right: { md: '8%', sm: 0, xs: 0 } }}>
          <Box sx={{ position: "absolute", top: "0px", right: "0px", transform: "rotate(0deg)" }}>
            <img style={{ width: "100%", height: "100%", padding: "112px" }} src={cardGroup} alt="cardGroup" />
          </Box>
          <Box sx={{ position: "absolute", top: "-25px", right: "17px", transform: "rotate(-3deg)" }}>
            <img style={{ width: "100%", height: "100%", padding: "112px" }} src={cardGroup} alt="cardGroup" />
          </Box>
          <Box sx={{ position: "absolute", top: "-40px", right: "58px", transform: "rotate(-2deg)" }}>
            <img style={{ width: "100%", height: "100%", padding: "112px" }} src={cardProduct} alt="cardProduct" />
          </Box>
        </Box>
      </Box>
      <Box align="center">
        <Typography sx={{ color: "white", marginTop: "121px" }} fontSize={{ md: "45px", xs: "32px" }} variant="h3" gutterBottom>
          <Box component="span" color="#767676"> Chainsecurity </Box> Tools Make <br /> Blockchain Safer
        </Typography>
        <Typography sx={{ color: "#a9a9a6", paddingTop: "16px", marginBottom: '35px' }} variant="subtitle1" gutterBottom>
          Enjoy a more private and secure internet, block malicious websites, stop web trackers,
          <br /> and monitor your data leaks all in one app.
        </Typography>
      </Box>
      <Box sx={{ display: { lg: 'none', md: 'block', sm: 'block', xs: 'block' } }}>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </Box>
      <Box sx={{ display: { lg: 'block', md: 'none', sm: 'none', xs: 'none' } }}>
        <Blockchain />
      </Box>
      <Stack alignItems="center">
        <Button variant="contained" sx={{ borderRadius: '30px', mt: '32px', px: 6, py: 2, bgcolor: 'white', color: 'black', fontWeight: 600, textTransform: 'none', fontSize: '14px' }}>See All Features</Button>
      </Stack>
      <Box align="center" sx={{ marginTop: "100px", mb: '49px' }}>
        <Typography sx={{ color: "white", bottom: 0 }} fontSize={{ md: "45px", xs: "32px" }} variant="h3" gutterBottom>
          <Box component="span" color="#767676">Why</Box> Choose <br /> Chainsecurity?
        </Typography>
        <Typography sx={{ color: "white" }} >
          We build long-term relationships with publishers and influencers
        </Typography>
      </Box>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <Grid direction={{ md: "row", sm: "column", xs: "column" }} container spacing={{ md: 2, xs: 1 }} sx={{ margin: '100px' }}>
          {chainsecuritydata.map((item, index) => (
            <Grid key={index} item size={{ md: 6, sm: 12, xs: 12 }}>
              <Box sx={{ backgroundImage: `url(${hoverchain})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', p: '0px', ":hover": { p: '7px', transition: '0.2s', cursor: 'pointer', "img": { backgroundColor: '#FF8629', transition: '0.2s' } }, borderRadius: '29px' }}>
                <Card sx={moneycardstyle}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Box component="img" src={icon} alt="icon" sx={{ p: '13px', backgroundColor: '#23222a', borderRadius: '50%' }} />
                    <Typography sx={{ size: '20px' }} variant="body1">{item.content}</Typography>
                  </Stack>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Stack>
      <Box sx={{ color: 'white', }}>
        <Container maxWidth="lg" sx={{ pt: 8, pb: 4 }}>

          {/* Main Sections */}
          <Grid container spacing={3} alignItems="center" direction={{ md: "row", sm: "column", xs: "column" }}>
            <Grid item size={6} sx={{ width: { md: "48%", xs: "100%" } }}>
              <Box component="img" src={icon19} alt="Check Blockchain Address" sx={{ width: '100%' }} />
            </Grid>
            <Grid item size={6} sx={{ width: { md: "48%", xs: "100%" } }} alignItems="center">
              <Chip label="Blockchain Address" sx={{ bgcolor: '#23222a', color: '#bdbdbd', p: '17px', fontSize: '14px', mb: "20px" }} />
              <Typography variant="h4" fontWeight={700} mb={2}>Check Blockchain Address Using Btrace</Typography>
              <Typography variant="body1" mb={4}>
                In seconds, determine the risk level of the counterparty's address, find out the source of his funds and make an informed decision about interacting with him
              </Typography>
              <Button variant="contained" endIcon={<ArrowForwardIosIcon />} sx={{ size: '12px', borderRadius: 8, px: 4, py: 2, bgcolor: 'white', color: 'black' }}>FIRST CHECK FREE</Button>
            </Grid>
          </Grid>
          <Grid container spacing={3} alignItems="center" direction={{ md: "row", sm: "column", xs: "column" }}>
            <Grid item size={6} sx={{ width: { md: "48%", xs: "100%" } }} display={{ md: "block", xs: "none" }}>
              <Chip label="Blockchain Address" sx={{ bgcolor: '#23222a', color: '#bdbdbd', p: '17px', fontSize: '14px', mb: "20px" }} />
              <Typography variant="h4" fontWeight={700} mb={2}>Order a blockchain investigation and return stolen cryptocurrency</Typography>
              <Typography variant="body1" mb={4}>
                In seconds, determine the risk level of the counterparty’s address, find out the source of his funds and make an informed decision about interacting with him.
              </Typography>
              <Button variant="contained" endIcon={<ArrowForwardIosIcon />} sx={{ borderRadius: 8, px: 4, py: 2, background: 'linear-gradient(308.69deg, #FF8629 63.74%, #FFD729 92.78%)', color: 'white' }}>RECOVER STOLEN CRYPTOCURRENCY</Button>
            </Grid>
            <Grid item size={6} sx={{ width: { md: "48%", xs: "100%" } }}>
              <Box component="img" src={icon20} alt="Check Blockchain Address" sx={{ width: '100%' }} />
            </Grid>
            <Grid item size={6} sx={{ width: { md: "48%", xs: "100%" } }} display={{ md: "none", xs: "block" }}>
              <Chip label="Blockchain Address" sx={{ bgcolor: '#23222a', color: '#bdbdbd', p: '17px', fontSize: '14px', mb: "20px" }} />
              <Typography variant="h4" fontWeight={700} mb={2}>Order a blockchain investigation and return stolen cryptocurrency</Typography>
              <Typography variant="body1" mb={4}>
                In seconds, determine the risk level of the counterparty’s address, find out the source of his funds and make an informed decision about interacting with him.
              </Typography>
              <Button variant="contained" endIcon={<ArrowForwardIosIcon />} sx={{ borderRadius: 8, px: 4, py: 2, background: 'linear-gradient(308.69deg, #FF8629 63.74%, #FFD729 92.78%)', color: 'white' }}>RECOVER STOLEN CRYPTOCURRENCY</Button>
            </Grid>
          </Grid>
          <Grid container spacing={3} alignItems="center" direction={{ md: "row", sm: "column", xs: "column" }}>
            <Grid item size={6} sx={{ width: { md: "48%", xs: "100%" } }}>
              <Box component="img" src={icon21} alt="Check Blockchain Address" sx={{ width: '100%' }} />
            </Grid>
            <Grid item size={6} sx={{ width: { md: "48%", xs: "100%" } }}>
              <Chip label="Blockchain Address" sx={{ bgcolor: '#23222a', color: '#bdbdbd', p: '17px', fontSize: '14px', mb: "20px" }} />
              <Typography variant="h4" fontWeight={700} mb={2}>Explore blockchain for yourself at Bholder</Typography>
              <Typography variant="body1" mb={4}>
                Bholder visualizes addresses as graphical elements and the relationships between them, unlike the blockchain explorer where transactions are represented as a table.
              </Typography>
              <Button variant="contained" endIcon={<ArrowForwardIosIcon />} sx={{ borderRadius: 8, px: 4, py: 2, bgcolor: 'white', color: 'black' }}>DEMONSTRATION OF BHOLDER'S WORK</Button>
            </Grid>
          </Grid>

          {/* Company Section */}
          <Box textAlign="center" mb={6} mt={5}>
            <Box component="img" src={logo} alt="Chainsecurity" sx={{ maxWidth: '198px' }} />
          </Box>
          <Company />
          {/* Bottom Section */}
          <Box textAlign="center" mb='186px'>
          </Box>
          <Box sx={{ mb: '43px' }}>
            <Box sx={{ display: { lg: 'none', md: 'none', sm: 'block', xs: 'block' } }}>
              <GlobalCarousel slides={GLOBALSLIDES} options={OPTIONS} />
            </Box>
            <Box sx={{ display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' } }}>
              <Global />
            </Box>
          </Box>
        </Container>
      </Box>
    </Stack >
  )
}