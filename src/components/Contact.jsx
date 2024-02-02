import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Contact = () => {
  return (
    <Box sx={{ textAlign: 'center', p: 3, bgcolor: 'background.default', color: 'text.primary', marginTop: 5 }}>
      <Typography variant="h4" gutterBottom fontSize='40px' fontWeight='200'>
        Contact us for more information
      </Typography>
      <Button
        variant="contained"
        startIcon={<MailOutlineIcon />}
        sx={{ backgroundColor: '#a50034', color: 'white', margin: 5, width: '20%', height: '60px', '&:hover': {
            backgroundColor: '#696969', // Change button color to grey on hover
          },}} // Custom styles for the button
        href="mailto:wli@chapman.edu"
      >
        wli@chapman.edu
      </Button>
    </Box>
  );
};

export default Contact;
