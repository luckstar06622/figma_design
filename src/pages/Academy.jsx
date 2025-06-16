// ... existing code ...
import { Box, Container,Stack, Typography, Chip, Grid, Card, CardMedia, CardContent, } from '@mui/material';

import image0 from '../assets/Academy/image0.svg';
import image1 from '../assets/Academy/image1.svg';
import image2 from '../assets/Academy/image2.svg';
import image3 from '../assets/Academy/image3.svg';

const cards = [
  {
    title: "Glossary",
    date: "February 12, 2023",
    image: image0,
  },
  {
    title: "Lesson №1. Blockchain",
    date: "February 12, 2023",
    image: image1,
  },
  {
    title: "Lesson №2. Blockchain Basics, Ethereum...",
    date: "February 12, 2023",
    image: image2,
  },
  {
    title: "Lesson №3. How to earn on the blockchain...",
    date: "February 12, 2023",
    image: image3,
  },
];

export default function Academy() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        color: '#fff',
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center', mb: 6 }}>
        <Stack alignItems="center" alignContent="center">
          <Chip label="Chain Security" sx={{ bgcolor: '#23222a', color: '#bdbdbd', p: '18px', fontSize: '16px', mb: 2 }} />
        </Stack>
        <Typography fontSize={{md:"45px",xs:"32px"}} variant="h3" fontWeight="bold" gutterBottom sx={{ mb: '22px' }}>
          Chain <Box component="span" color="#bdbdbd">Security</Box> Academy
        </Typography>
        <Typography variant="body1" color="#bdbdbd">
          Chain Security is a technology company, speakers at leading industry exhibitions
          <br />
          on blockchain technologies, big data and information security, investigations of
          <br />
          crypto fraud cases around the world.
        </Typography>
      </Container>
      <Container>
        <Grid container rowSpacing={3} spacing={3} direction={{ md: "row", sm: "column" , xs: "column" }}>
          {cards.map((card, idx) => (
            <Grid size={4} key={idx} sx={{width:{md:"30%",xs:"100%"}}}>
              <Card sx={{ bgcolor: 'transparent', height: '100%', border: 'none', boxShadow: 'none' }}>
                <CardMedia
                  component="img"
                  height="100%"
                  width="100%"
                  image={card.image}
                  alt={card.title}
                />
                <CardContent sx={{ padding: '0px', mt: '10px' }}>
                  <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ color: '#fff' }}>
                    {card.title}
                  </Typography>
                  <Typography variant="caption" color="#bdbdbd">
                    {card.date}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}