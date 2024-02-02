import React, { useState } from 'react';
import { Box, Paper, Typography} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// Importing images locally
import img1 from '../assets/image1.jpg';
import img2 from '../assets/image2.jpg';

// Sample images array with local imports
const images = [
  { url: img1 },
  { url: img2 },
  // Add more images as needed
];

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    
    <Box sx={{ maxWidth: 1200, position: 'relative', margin: 'auto'}}>
        <Box sx={{ textAlign: 'center', marginBottom: '45px', marginTop: '30px'}}>
        <Typography gutterBottom variant="h4" component="div" color="#231f20" fontWeight='300' fontSize='45px' boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2)'>
          Earth Systems Science and Data Solutions Lab
        </Typography>
      </Box>
      <ArrowBackIosNewIcon
        sx={{ position: 'absolute', left: 30, top: '50%', zIndex: 1, cursor: 'pointer', color: 'white', fontSize:'3rem'}}
        onClick={prevSlide}
      />
      <ArrowForwardIosIcon
        sx={{ position: 'absolute', right: 30, top: '50%', zIndex: 1, cursor: 'pointer', color: 'white', fontSize:'3rem'}}
        onClick={nextSlide}
      />
      {images.map((image, index) => (
        <div key={index}>
          {index === current && (
            <Paper elevation={4} sx={{ p: 2 }}>
              <img src={image.url} alt="" style={{ width: '100%' }} />
            </Paper>
          )}
        </div>
      ))}
    </Box>
  );
};

export default ImageCarousel;
