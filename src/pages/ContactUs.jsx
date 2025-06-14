import { Box,InputAdornment, InputLabel, Typography, FormControl, OutlinedInput, Stack, Chip } from '@mui/material';
import users from '../assets/users.jpg';
import inputBg from '../assets/inputBg.png';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function ContactUs() {

  const inputBgStyle = {
    boxShadow: "0px 14px 17.7px 0px rgba(0, 0, 0, 0.49)",
    border: "1.1px solid #1a181885",
    borderRadius: "12px",
    justifyContent: "space-between",
    m: 0, backgroundImage: `url(${inputBg})`, backgroundRepeat: "no-repeat", width: "100%", height: "100%"
  }
  const inputBgStyle1 = {
    boxShadow: "0px 14px 17.7px 0px rgba(0, 0, 0, 0.49)",
    border: "none",
    borderRadius: "12px",
    color: "white",
    padding: "22px 60px",
    fontSize: "17px",
    backgroundImage: `url(${inputBg})`, backgroundRepeat: "no-repeat"
  }

  return (
    <Stack alignItems="center">
      <Chip sx={{
        backgroundColor: "rgba(39, 39, 50, 1)",
        borderColor: "rgba(255, 255, 255, 0.2)",
        color: "white",
        border: "1px",
        padding: "20px"
      }} label="Contact Us" />
      <Typography sx={{ color: "white", paddingTop: "30px" }} variant="h3" gutterBottom>
        Let's Chat, Reach Out to Us
      </Typography>
      <Typography sx={{ color: "white", paddingTop: "20px" }} variant="subtitle1" gutterBottom>
        Do you need a consultation?
      </Typography>

      <Stack sx={{ marginTop: "50px", mb: "247px",maxWidth:'834px', borderRadius: "24px", backgroundImage: `url(${users})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", width: "100%", height: "100%" }}>
        <Stack gap={2} sx={{ padding: "36px 46px" }}>
          <Stack direction="row" spacing={2}>
            <Box sx={{ width: "50%", height: "100%" }}>
              <InputLabel sx={{ color: "white" }}>First Name</InputLabel>
              <FormControl sx={inputBgStyle}>
                <OutlinedInput sx={{ color: "white" }} placeholder='Enter Your First Name'
                  startAdornment={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 20C5 17.5 7 15.6 9.4 15.6H14.5C17 15.6 18.9 17.6 18.9 20" stroke="white" stroke-width="1.4824" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15.0005 5.2C16.7005 6.9 16.7005 9.6 15.0005 11.2C13.3005 12.8 10.6005 12.9 9.00048 11.2C7.40048 9.5 7.30048 6.8 9.00048 5.2C10.7005 3.6 13.3005 3.6 15.0005 5.2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>} />
              </FormControl>
            </Box>
            <Box sx={{ width: "50%", height: "100%" }}>
              <InputLabel sx={{ color: "white" }}>Last Name</InputLabel>
              <FormControl sx={inputBgStyle}>
                <OutlinedInput sx={{ color: "white" }} placeholder='Enter Your Last Name'
                  startAdornment={<InputAdornment position="start">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 20C5 17.5 7 15.6 9.4 15.6H14.5C17 15.6 18.9 17.6 18.9 20" stroke="white" stroke-width="1.4824" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M15.0005 5.2C16.7005 6.9 16.7005 9.6 15.0005 11.2C13.3005 12.8 10.6005 12.9 9.00048 11.2C7.40048 9.5 7.30048 6.8 9.00048 5.2C10.7005 3.6 13.3005 3.6 15.0005 5.2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </InputAdornment>}
                />
              </FormControl>
            </Box>
          </Stack>
          <Box>
            <InputLabel sx={{ color: "white" }}>Email</InputLabel>
            <FormControl sx={inputBgStyle}>
              <OutlinedInput sx={{ color: "white" }} placeholder='Enter Your Email'
                startAdornment={<InputAdornment position="start">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 12C16 14.209 14.209 16 12 16C9.791 16 8 14.209 8 12C8 9.791 9.791 8 12 8V8C14.209 8 16 9.791 16 12V13.5C16 14.881 17.119 16 18.5 16C19.881 16 21 14.881 21 13.5V12C21 7.029 16.971 3 12 3C7.029 3 3 7.029 3 12C3 16.971 7.029 21 12 21C13.149 21 14.317 20.782 15.444 20.315C16.052 20.063 16.614 19.747 17.133 19.386" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </InputAdornment>}
              />
            </FormControl>
          </Box>
          <InputLabel sx={{ color: "white" }}>Message</InputLabel>
          <FormControl>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={7}
              style={inputBgStyle1}
              placeholder='Enter Your Message'
            />
            <Box sx={{ position: "absolute", top: "20px", left: "20px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18H18C19.657 18 21 16.657 21 15V7C21 5.343 19.657 4 18 4H6C4.343 4 3 5.343 3 7V15C3 16.657 4.343 18 6 18H7.5V21L12 18Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </Box>
          </FormControl>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Chip sx={{
              background: "linear-gradient(308.69deg, #FF8629 63.74%, #FFD729 92.78%)",
              borderColor: "rgba(255, 255, 255, 0.2)",
              color: "white",
              border: "1px",
              padding: "23px",
              m: "5px",
              width: "140px"
            }} label="Contact Us" />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  )
}


