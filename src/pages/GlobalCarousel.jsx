import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import cardmark from '../assets/about/cardmark.svg';
import { Box, Grid, Typography, Stack, Button } from '@mui/material';
import Groupbg2 from '../assets/product/Group2.svg';

export const globalstyle = {
  backgroundImage: `url(${Groupbg2})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  p: 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  minHeight: '417px',
  borderRadius: '20px',
}

const GlobalCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item, index) => (
            <div className="embla__slide" key={index}>
              <Grid key={index} size={4} md={4} sx={{ width: { md: "30%", xs: "100%" } }}>
                <Box sx={globalstyle}>
                  <img src={cardmark} alt="icon" style={{ width: 62, marginBottom: '48px' }} />
                  <Typography fontSize='24px' fontWeight="bold" gutterBottom>{item.title}</Typography>
                  <Typography color="#bdbdbd">
                    {item.content}
                  </Typography>
                </Box>
              </Grid>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GlobalCarousel
