import { Box, Grid, Typography, Stack, Button } from '@mui/material';
import cardmark from '../assets/about/cardmark.svg';
import card11 from '../assets/product/card11.svg';
import card12 from '../assets/product/card12.svg';
import card13 from '../assets/product/card13.svg';
import Groupbg1 from '../assets/product/Group1.svg';
import Groupbg2 from '../assets/product/Group2.svg';
import bholderbg from '../assets/bholder/cardbg.svg';

export const globalstyle = {
  backgroundImage: `url(${Groupbg2})`,
  backgroundSize: 'unset',
  backgroundRepeat: 'no-repeat',
  p: 6,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  mb: 3
}
export const bholderstyle = {
  backgroundImage: `url(${bholderbg})`,
  backgroundSize: 'unset',
  backgroundRepeat: 'no-repeat',
  p: 6,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  mb: 3
}

export const companystyle = {
  backgroundImage: `url(${Groupbg1})`,
  backgroundSize: 'unset',
  backgroundRepeat: 'no-repeat',
  p: 6,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  mb: 3
}

export const blockchainstyle = {
  backgroundImage: `url(${card11})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "397px", height: "522px", padding: "30px,", position: "relative"
}

const companydata = [
  {
    title: 'Team Qualification',
    content: 'Experienced certified AML/CFT specialists, blockchain investigators, developers, OSINT specialists. Our employees regularly speak at specialized exhibitions and conferences as invited experts, and examine dozens of different cases of crypto',
    btName: 'Read More'
  },
  {
    title: 'Operational Efficiency',
    content: 'Our investigations have been accepted by law enforcement agencies in different countries, by dozens of cryptocurrency exchanges, used in hundreds of crypto investigations, and taken into account by courts in different jurisdictions.',
    btName: 'Read More'
  }
]

const globalData = [
  {
    title: 'Proprietary <br /> Technology',
    content: 'We rely solely on our in-house technologies and solutions, ensuring full control, independence, and innovation without third-party dependencies.'
  },
  {
    title: 'Global Compliance & Localization',
    content: 'We adapt our services to local legal frameworks and market specifics, enabling smooth operations with clients and partners across the globe.'
  },
  {
    title: 'Trusted By <br />Institutions',
    content: 'We work with banks, regulators, law enforcement, crypto platforms, exchangers, and individuals to ensure secure, transparent financial interactions.'
  }
]

const blockchainData = [
  {
    title: 'Btrace',
    content: 'AML verification of cryptocurrency addresses to assess the level of risk and understand the sources of funds',
    img: {
      backgroundImage: `url(${card11})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      width: "397px", height: "522px", padding: "30px,", position: "relative"
    }
  },
  {
    title: 'Blockchainb <br /> Investigations',
    content: 'Search and return of stolen cryptocurrency',
    img: {
      backgroundImage: `url(${card12})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      width: "397px", height: "522px", padding: "30px,", position: "relative"
    }
  },
  {
    title: 'Bholder',
    content: 'A tool that visualizes the interactions between blockchain addresses',
    img: {
      backgroundImage: `url(${card13})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      width: "397px", height: "522px", padding: "30px,", position: "relative"
    }
  }
]
export function Company() {
  return (
    <>
      <Stack alignItems="center" spacing={2} sx={{ pb: 4 }}>
        <Typography variant="h3" fontWeight="bold" align="center">
          Chain Security Is <Box component="span" color="#bdbdbd">An</Box> International<br />Technology Company
        </Typography>
        <Typography variant="body1" color="#bdbdbd" align="center" sx={{ maxWidth: 700, mt: '24px' }}>
          Specializes in developing blockchain analytics tools and investigating crypto fraud incidents worldwide.
        </Typography>
      </Stack>
      {/* Team/Operational Cards */}
      <Grid container spacing={3} justifyContent="center" sx={{ mb: '100px' }}>
        {companydata.map((data, index) => (
          <Grid key={index} item size={6} justifyContent="center" >
            <Box sx={companystyle}>
              <Typography variant="h4" fontWeight="bold" gutterBottom align="center">{data.title}</Typography>
              <Typography color="#bdbdbd" align="center" sx={{ mb: 3 }}>
                {data.content}
              </Typography>
              <Button variant="contained" sx={{ mb: 3, borderRadius: '30px', px: 7, py: 2, bgcolor: 'white', color: 'black', fontWeight: 600, textTransform: 'none' }}>{data.btName}</Button>
            </Box>
          </Grid>
        ))}
        {/* <Grid item size={6} justifyContent="center" >
          <Box sx={companystyle}>
            <Typography variant="h4" fontWeight="bold" gutterBottom align="center">Team Qualification</Typography>
            <Typography color="#bdbdbd" align="center" sx={{ mb: 3 }}>
              Experienced certified AML/CFT specialists, blockchain investigators, developers, OSINT specialists. Our employees regularly speak at specialized exhibitions and conferences as invited experts, and examine dozens of different cases of crypto.
            </Typography>
            <Button variant="contained" sx={{ mb: 3, borderRadius: '30px', px: 7, py: 2, bgcolor: 'white', color: 'black', fontWeight: 600, textTransform: 'none' }}>Read More</Button>
          </Box>
        </Grid>
        <Grid item size={6}>
          <Box sx={companystyle}>
            <Typography variant="h4" fontWeight="bold" gutterBottom align="center">Operational Efficiency</Typography>
            <Typography color="#bdbdbd" align="center" sx={{ mb: 3 }}>
              Our investigations have been accepted by law enforcement agencies in different countries, by dozens of cryptocurrency exchanges, used in hundreds of crypto investigations, and taken into account by courts in different jurisdictions.
            </Typography>
            <Button variant="contained" sx={{ mb: 3, borderRadius: '30px', px: 7, py: 2, bgcolor: 'linear-gradient(308.69deg, #FF8629 63.74%, #FFD729 92.78%)', color: 'white', fontWeight: 600, textTransform: 'none', background: 'linear-gradient(308.69deg, #FF8629 63.74%, #FFD729 92.78%)' }}>Read More</Button>
          </Box>
        </Grid> */}
      </Grid>
      {/* Unique Approach Section */}

    </>
  )
}

export function Global() {
  return (
    <>
      <Stack alignItems="center" spacing={2} sx={{ mb: '40px' }}>
        <Typography variant="h4" fontWeight="bold" align="center">
          Our Unique Approach To Global<br />Compliance <Box component="span" color="#bdbdbd">And</Box> Innovation
        </Typography>
        <Typography color="#bdbdbd" align="center" sx={{ maxWidth: 700 }}>
          We build and deliver original, localized solutions tailored to the needs of diverse markets, collaborating with institutions, regulators, and end users around the world.
        </Typography>
      </Stack>
      <Grid container spacing={0} justifyContent="center">
        {globalData.map((item, index) => (
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
    </>
  )
}

export function Blockchain() {
  return (
    <>
      <Stack direction="row" spacing={2}>
        {blockchainData.map((data, index) => (
          <Box key={index} sx={data.img}>
            <Box sx={{ position: "absolute", bottom: 0, left: 0, padding: "55px" }}>
              <Typography sx={{ color: "white", bottom: 0 }} variant="h4" gutterBottom>
                {data.title}
              </Typography>
              <Typography sx={{ color: "white", fontSize: "14px" }} >
                {data.content}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </>
  )
}