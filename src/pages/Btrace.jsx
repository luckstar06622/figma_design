import { Box, Button, Grid, Typography, Stack, Card, TextField, Accordion, AccordionSummary, AccordionDetails, Chip } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import groupM from '../assets/btrace/GroupM.svg';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import card11 from '../assets/btrace/card11.svg';
import card22 from '../assets/btrace/card22.svg';
import logo from '../assets/product/logo.svg';
import questionbg from '../assets/btrace/questionbg.svg';
import searchbg from '../assets/btrace/searchbg.svg';
import EmblaCarousel from './EmblaCarousel'
import MoneyCarousel from './MoneyCarousel'
import { ImportantData, Important, MoneyCard,moneycarddata } from './components';
import '../css/embla.css'
const OPTIONS = { loop: true }
const SLIDES = ImportantData;
const MONEYCARDS = moneycarddata;

const faqData = [
  {
    question: 'What is Risk Score?',
    answer: 'This is a parameter that is expressed as a value from 0 to 100, which investigates and analyzes the history of the item and determines the likelihood of its connection with illegal or suspicious activity.'
  },
  {
    question: 'What Should I Do If I Received Dirty Funds?',
    answer: 'If you received dirty funds, you should contact the service for further instructions and possible solutions.'
  },
  {
    question: 'Can The Risk Score Be Improved?',
    answer: 'The risk score can be improved by providing additional information and clarifications about the source of funds.'
  },
];



export default function Btrace() {
  return (
    <Stack color='white' sx={{ width: '100%' }}>
      <Stack alignItems="center" alignContent="center">
        <Chip label="Btrace" sx={{ bgcolor: '#23222a', color: '#bdbdbd', p: '18px', fontSize: '16px', mb: 2 }} />
        <Box sx={{ pt: 2, pb: 4 }}>
          <Stack alignItems="center">
            <Typography fontSize={{ md: "45px", xs: "32px" }} variant="h4" fontWeight="bold" align="center" sx={{ mb: '35px' }}>
              Checking A Crypto Wallet For  Connection With <Box component="span" color="#767676">“Dirty”</Box> Money Will Allow
            </Typography>
            <Stack direction="row" sx={{ mb: '84px' }}>
              <Button sx={{ backgroundColor: "white", color: 'black', borderRadius: '30px', px: 4, py: 2, bgcolor: 'white', fontWeight: 600, textTransform: 'none' }}>
                Check crypto wallet
              </Button>
              <Button color="white" sx={{ textTransform: 'none', ml: '30px' }} endIcon={<ArrowForwardIosIcon />}>About Us</Button>
            </Stack>
            <Box sx={{ display: { lg: 'none', md: 'none', sm: 'none', xs: 'block' } }}>
              <MoneyCarousel slides={MONEYCARDS} options={OPTIONS} />
            </Box>
            <Box sx={{ display: { lg: 'block', md: 'block', sm: 'block', xs: 'none' } }}>
              <MoneyCard />
            </Box>
          </Stack>
        </Box>

        {/* You Don't Have To Do Anything Bad To Get Blocked Section */}
        <Box sx={{ mt: '64px', mb: 8 }}>
          <Stack alignItems="center" spacing={2}>
            <Typography fontSize={{ md: "45px", xs: "32px" }} variant="h4" fontWeight="bold" align="center">
              You <Box component="span" color="#bdbdbd">Don’t Have</Box> To Do Anything Bad To <br /> Get Blocked
            </Typography>
            <Typography align="center" color="#bdbdbd" sx={{ maxWidth: 861 }}>
              Let’s imagine Austin – a 29-year-old crypto user living a perfectly ordinary working as a system analyst in a successful IT company. His stable salary is complemented by additional income from various freelance projects, which allows him to periodically invest in cryptocurrencies.
            </Typography>
            <Box sx={{ width: '100%', mt: 4, mb: 2, borderRadius: 4, overflow: 'hidden', boxShadow: 3 }}>
              <img src={groupM} alt="Austin's story" style={{ width: '100%', display: 'block' }} />
            </Box>
          </Stack>
        </Box>

        {/* Check Crypto Wallet Free Section */}
        <Box sx={{ mb: 8, width: '90%' }}>
          <Stack spacing={2} sx={{ mb: '20px' }}>
            <Typography variant="h4" fontWeight="bold" align="center">Check Crypto <br /> Wallet <Box component="span" color="#FF8629">Free</Box></Typography>
            <Typography align="center" color="#bdbdbd">Works with Ethereum, BSC, Bitcoin, Tron, Everscale, Venom  (soon)</Typography>
          </Stack>
          <Box sx={{ p: '5px', borderRadius: '28px', backgroundImage: `url(${searchbg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', backgroundImage: `url(${questionbg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: '28px', p: 1, boxShadow: 3 }}>
              <TextField
                fullWidth
                placeholder="Check Wallet Address ..."
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                  sx: { color: 'white', pl: 2 },
                }}
                sx={{ bgcolor: 'transparent', flex: 1 }}
              />
              <Button variant="contained" sx={{ ml: 2, borderRadius: '30px', px: 4, bgcolor: '#FF8629', color: 'white', fontWeight: 600, textTransform: 'none', }}>Check</Button>
            </Box>
          </Box>
        </Box>

        {/* Quality Assurance & Price Guarantee Section */}
        <Box maxWidth="lg" sx={{ mb: 8 }}>
          <Grid container spacing={3} alignItems="center" direction={{ md: "row", sm: "column", xs: "column" }}>
            <Grid item size={6} sx={{ width: { md: "48%", xs: "100%" } }}>
              <Box component="img" src={card11} alt="Check Blockchain Address" sx={{ width: '100%' }} />
            </Grid>
            <Grid item size={6} sx={{ width: { md: "48%", xs: "100%" } }} alignItems="center">
              <Chip label="Blockchain Address" sx={{ bgcolor: '#23222a', color: '#bdbdbd', p: '17px', fontSize: '14px', mb: "20px" }} />
              <Typography variant="h4" fontWeight={700} mb={2}>Check Quality Assurance</Typography>
              <Typography variant="body1" mb={4}>
                Check it out for free – we will give you a unique opportunity to look at cryptocurrency wallets through the eyes of an exchange compliance manager and see how our service works in practice.
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
              <Typography variant="h4" fontWeight={700} mb={2}>Best Price Guarantee</Typography>
              <Typography variant="body1" mb={4}>
                The service is built on our own technological base, so we give a better price than any third-party solution reseller.
              </Typography>
              <Button variant="contained" endIcon={<ArrowForwardIosIcon />} sx={{ borderRadius: 8, px: 4, py: 2, bgcolor: 'white', color: 'black' }}>FIRST CHECK FREE</Button>
            </Grid>
            <Grid item size={6} sx={{ width: { md: "48%", xs: "100%" }, display: { md: "block", xs: "none" } }}>
              <Box component="img" src={card22} alt="Check Blockchain Address" sx={{ width: '100%' }} />
            </Grid>
          </Grid>
        </Box>

        {/* Why Is It Important To Check Section */}
        <Box sx={{ mb: 8 }}>
          <Stack alignItems="center" spacing={2}>
            <Box component="img" src={logo} alt="Chainsecurity" sx={{ mb: 2, maxWidth: '198px' }} />
            <Typography variant="h4" fontWeight="bold" align="center">Why Is It Important To Check?</Typography>
            <Typography align="center" color="#bdbdbd" sx={{ maxWidth: 700 }}>
              Enjoy a more private and secure internet, block malicious websites, stop web trackers and monitor your data leaks all in one app.
            </Typography>
          </Stack>
        </Box>
      </Stack>
      {/* Header Section */}

      <Box sx={{ display: { lg: 'none', md: 'block', sm: 'block', xs: 'block' } }}>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </Box>
      <Box sx={{ display: { lg: 'block', md: 'none', sm: 'none', xs: 'none' } }}>
        <Important />
      </Box>
      {/* FAQ Section */}
      <Stack alignItems="center" sx={{ mt: '118px' }}>
        <Box maxWidth="md" sx={{ mb: '118px' }}>
          <Stack alignItems="center">
            <Chip label="FAQ" sx={{ bgcolor: '#23222a', color: '#bdbdbd', p: '10px', fontSize: '14px', mb: '30px' }} />
            <Typography sx={{ mb: '24px' }} variant="h4" fontWeight="bold" align="center">Frequently <Box component="span" color="#bdbdbd">Asked</Box> Questions</Typography>
            <Typography align="center" color="#bdbdbd" sx={{ maxWidth: 700 }}>
              Specializes in developing blockchain analytics tools and investigating crypto fraud incidents worldwide.
            </Typography>
          </Stack>
          <Box sx={{ mt: 4 }}>
            {faqData.map((faq, idx) => (
              <Accordion key={idx} sx={{ backgroundImage: `url(${questionbg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', color: 'white', mb: 2, borderRadius: 2, boxShadow: 2 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                  <Typography fontWeight="bold">{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="#bdbdbd">{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Stack>

    </Stack>
  );
}