// Footer.js

import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: '#a50034',
        color: 'white',
        position: 'relative',
        bottom: 0,
        left: 0,
        textAlign: 'center',
        p: 3,
        marginTop: 2
      }}
    >
      <Typography variant="body2" sx={{
          fontSize: '1.15rem', // Or set a specific font-size
        }}>
        ©2023 - Earth System Science and Data Solutions Lab
      </Typography>
    </Box>
  );
};

export default Footer;
