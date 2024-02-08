import React from 'react';
import { Box, Typography, Button, Grid, Paper } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import keck_image from '../assets/KeckCenter_1.png'
const Contact = () => {
  return (
    <Box sx={{ p: 3, bgcolor: 'background.default', color: 'text.primary', border: '4px solid #a50034', // Red border
    borderRadius: '5px', // Rounded corners
    padding: '20px', // Spacing inside the border
    width: '80%', // Adjust width to make the box smaller
    mx: 'auto', // Margin on the X-axis to auto for centering
    display: 'flex', // Ensures content is properly aligned
    flexDirection: 'column', // Stacks children vertically
    alignItems: 'center', // Aligns children to the center
    justifyContent: 'center',}}>
      {/* Location Section */}
      <Box sx={{ marginBottom: 5, }}>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="body1" fontSize='20px' marginLeft={15}>
            <Typography variant="h5" gutterBottom fontSize='40px' fontWeight='300' marginBottom={5}>
          Location
        </Typography>
              Visit us at our office for a cup of coffee and a friendly discussion. 
              <br/><br/>
              450 N Center St, Orange, Keck Center Room 368, CA 92866
              <br/>
    
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper elevation={3}>
              <img src={keck_image} alt="Location" style={{ width: '100%' }} />
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Contact Section */}
      <Box sx={{ textAlign: 'center', marginTop: 5, bgcolor: 'background.default', color: 'text.primary' }}>
        <Typography variant="h4" gutterBottom fontSize='40px' fontWeight='200'>
          Contact us for more information
        </Typography>
        <Button
          variant="contained"
          startIcon={<MailOutlineIcon />}
          sx={{ backgroundColor: '#a50034', color: 'white', margin: 5, width: '40%', height: '60px', '&:hover': {
              backgroundColor: '#696969', // Change button color to grey on hover
            },}} // Custom styles for the button
          href="mailto:wli@chapman.edu"
        >
          wli@chapman.edu
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
