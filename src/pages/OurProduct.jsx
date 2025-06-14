import { Card, Box, Grid, Container, Typography, Stack, Chip, Button } from '@mui/material';
import cardProduct from '../assets/product/cardProduct.svg';
import cardGroup from '../assets/product/cardGroup.svg';
import productCardBg from '../assets/product/productCardBg.svg';
import icon19 from '../assets/product/icon19.svg';
import icon20 from '../assets/product/icon20.svg';
import icon21 from '../assets/product/icon21.svg';
import Groupbg from '../assets/Groupbg.svg';
import logo from '../assets/product/logo.svg';
import icon from '../assets/btrace/icon.svg';
import { Company, Global, Blockchain } from './components';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
const chainsafetycardstyle = {
  backgroundImage: `url(${Groupbg})`,
  backgroundSize: 'unset',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  color: 'white',
  borderRadius: 3, p: 3, boxShadow: 5,
  maxWidth:'550px'
}

export default function OurProduct() {


  return (
    <Stack alignItems="center" alignContent="center">
      <Stack alignItems="center" alignContent="center">
        <Chip label="Chain Security" sx={{ bgcolor: '#23222a', color: '#bdbdbd', p: '18px', fontSize: '16px', mb: 2 }} />
      </Stack>
      <Box align="center">
        <Typography sx={{ color: "white" }} variant="h3" gutterBottom>
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
          {/* <img src={BgShine} alt="BgShine" /> */}
          <img style={{ width: "100%", height: "100%", paddingTop: "112px" }} src={productCardBg} alt="productCardBg" />
        </Box>
        <Box>
          <Box sx={{ position: "absolute", top: "-37px", right: "21px", transform: "rotate(0deg)" }}>
            <img style={{ width: "100%", height: "100%", padding: "112px" }} src={cardGroup} alt="cardGroup" />
          </Box>
          <Box sx={{ position: "absolute", top: "-60px", right: "35px", transform: "rotate(-3deg)" }}>
            <img style={{ width: "100%", height: "100%", padding: "112px" }} src={cardGroup} alt="cardGroup" />
          </Box>
          <Box sx={{ position: "absolute", top: "-77px", right: "70px", transform: "rotate(-2deg)" }}>
            <img style={{ width: "100%", height: "100%", padding: "112px" }} src={cardProduct} alt="cardProduct" />
          </Box>
        </Box>
      </Box>
      <Box align="center">
        <Typography sx={{ color: "white", marginTop: "121px" }} variant="h3" gutterBottom>
          Chainsecurity Tools Make <br /> Blockchain Safer
        </Typography>
        <Typography sx={{ color: "white", paddingTop: "16px", marginBottom: '35px' }} variant="subtitle1" gutterBottom>
          Enjoy a more private and secure internet, block malicious websites, stop web trackers,
          <br /> and monitor your data leaks all in one app.
        </Typography>
      </Box>
      <Blockchain />
      <Chip sx={{
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderColor: "rgba(255, 255, 255, 0)",
        color: "black",
        border: "1px",
        fontSize: '14px',
        padding: "22px 32px",
        borderRadius: '30px'
      }} label="See All Features" />
      <Box align="center" sx={{ marginTop: "100px" , mb: '49px' }}>
        <Typography sx={{ color: "white", bottom: 0 }} variant="h3" gutterBottom>
          Why Choose <br /> Chainsecurity?
        </Typography>
        <Typography sx={{ color: "white" }} >
          We build long-term relationships with publishers and influencers
        </Typography>
      </Box>
      <Stack spacing={2}>
        <Grid container spacing={2} sx={{margin:'100px'}}>
          {chainsecuritydata.map((item, index) => (
            <Grid key={index} item size={6}>
              <Card sx={chainsafetycardstyle}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Box component="img" src={icon} alt="icon" sx={{ width: "61px" }} />
                  <Typography sx={{ size: '20px' }} variant="body1">{item.content}</Typography>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
      <Box sx={{ color: 'white', }}>
        <Container maxWidth="lg" sx={{ pt: 8, pb: 4 }}>

          {/* Main Sections */}
          <Grid container spacing={3} alignItems="center">
            <Grid item size={6} md={6}>
              <Box component="img" src={icon19} alt="Check Blockchain Address" sx={{ width: '100%' }} />
            </Grid>
            <Grid item size={6} md={6}>
              <Chip label="Blockchain Address" sx={{ bgcolor: '#23222a', color: '#bdbdbd', p: '17px', fontSize: '14px', mb: "20px" }} />
              <Typography variant="h4" fontWeight={700} mb={2}>Check Blockchain Address Using Btrace</Typography>
              <Typography variant="body1" mb={4}>
                In seconds, determine the risk level of the counterparty's address, find out the source of his funds and make an informed decision about interacting with him
              </Typography>
              <Button variant="contained" endIcon={<ArrowForwardIosIcon />} sx={{ borderRadius: 8, px: 4, py: 2, bgcolor: 'white', color: 'black' }}>FIRST CHECK FREE</Button>
            </Grid>
          </Grid>
          <Grid container spacing={3} alignItems="center">
            <Grid item size={6}>
              <Chip label="Blockchain Address" sx={{ backgroundImage: `url(${Groupbg})`, backgroundSize: 'unset', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', color: '#bdbdbd', p: '17px', fontSize: '14px' }} />
              <Typography variant="h4" fontWeight={700} mb={2}>Order a blockchain investigation and return stolen cryptocurrency</Typography>
              <Typography variant="body1" mb={4}>
                In seconds, determine the risk level of the counterparty’s address, find out the source of his funds and make an informed decision about interacting with him.
              </Typography>
              <Button variant="contained" endIcon={<ArrowForwardIosIcon />} sx={{ borderRadius: 8, px: 4, py: 2, background: 'linear-gradient(308.69deg, #FF8629 63.74%, #FFD729 92.78%)', color: 'white' }}>RECOVER STOLEN CRYPTOCURRENCY</Button>
            </Grid>
            <Grid item size={6} md={6}>
              <Box component="img" src={icon20} alt="Check Blockchain Address" sx={{ width: '100%' }} />
            </Grid>
          </Grid>
          <Grid container spacing={3} alignItems="center">
            <Grid item size={6} md={6}>
              <Box component="img" src={icon21} alt="Check Blockchain Address" sx={{ width: '100%' }} />
            </Grid>
            <Grid item size={6} md={6}>
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
            <Box component="img" src={logo} alt="Chainsecurity" sx={{ mb: 2, maxWidth: '198px' }} />
            <Typography variant="h4" fontWeight={700} mb={2}>Chain Security Is An International Technology Company</Typography>
            <Typography variant="body1" color="#bdbdbd" mb={4}>
              Specializes in developing blockchain analytics tools and investigating crypto fraud incidents worldwide.
            </Typography>
          </Box>
          <Company />
          {/* Bottom Section */}
          <Box textAlign="center" mb={6}>
            <Typography variant="h4" fontWeight={700} mb={2}>Our Unique Approach To Global Compliance <Box component="span" color="orange">And</Box> Innovation</Typography>
            <Typography variant="body1" color="#bdbdbd" mb={4}>
              We build and deliver original, localized solutions tailored to the needs of diverse markets, collaborating with institutions, regulators, and end users around the world.
            </Typography>
          </Box>
        </Container>
        <Global />
      </Box>
    </Stack >
  )
}