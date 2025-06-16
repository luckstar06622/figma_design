import { Box, TextField, Button, Grid, Typography, Paper } from '@mui/material';

export default function ContactForm() {
  return (
    <Box sx={{ mt: 8, display: 'flex', justifyContent: 'center' }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: 4,
          backdropFilter: 'blur(10px)',
          maxWidth: 600,
          width: '100%',
        }}
      >
        <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
          Let’s Chat, <span style={{ color: '#FFA726' }}>Reach Out To Us</span>
        </Typography>
        <Typography variant="subtitle1" align="center" mb={3}>
          Do you need a consultation?
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField fullWidth label="First Name" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Last Name" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Email" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth multiline rows={4} label="Message" variant="outlined" />
          </Grid>
        </Grid>
        <Box mt={3} textAlign="right">
          <Button variant="contained" sx={{ background: 'linear-gradient(to right, #FFA726, #FB8C00)' }}>
            Contact →
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
