import React from 'react';
import { Grid, Card, CardMedia, Typography, CardContent} from '@mui/material';
import ProfilePicture from '../assets/profile.jpg'

const DescriptionSection = () => {
  return (
    <Card sx={{ maxWidth: '100%', overflow: 'hidden', padding: 3, boxShadow: 3, marginLeft: 15, marginRight: 15, borderBottom: '5px solid #a50034', borderTop: '5px solid #a50034'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <CardMedia
            component="img"
            image={ProfilePicture} // Replace with your image path
            alt="Profile"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: '50%',
              border: '1px solid #fff',
              margin: 'auto' // White border around the image
            }}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
        <CardContent>
  <Typography variant="subtitle1" component="p" fontWeight="500" gutterBottom>
    Overview of scholarly research/creative activity:
  </Typography>
  <Typography variant="body1" color="text.secondary" paragraph>
    Professor El-Askary is contributing uniquely to world-class research by combining his knowledge of computational sciences and remote sensing technologies together with his keen interest in applying these technologies to address the environmental challenges facing citizens, governments, natural resources managers, and decision-makers.
  </Typography>

  <Typography variant="subtitle1" component="p" fontWeight="500" gutterBottom>
    Specific projects working on:
  </Typography>
  <Typography variant="body1" color="text.secondary" paragraph>
    The best way to describe Professor El-Askary is to see him as an Earth System Scientist with a major interest in studying natural hazards, atmospheric events, and climate change related issues with special emphasis on problems related to the study of desertification and aerosols’ impact on renewable energy, and marine environment. He carries out his work by combining his physical and earth systems knowledge with new breakthroughs in machine learning and data mining; the outcome is ideas and proposals to address sustainable development goals. His work coordinates and integrates state-of-the-art Earth Observation activities in the MENA region to develop links and initiatives toward achieving sustainable development goals (SDGs). His research interests include dust storms and air quality monitoring and detection using different remote sensing technologies and studying other extreme events, The impact of the changing climate on sea level and marine habits is a priority for him. His research also included using earth observations in studying the impact of severe dust storms, anomalous chlorophyll outbreaks in the marine environment, hurricane intensification, and transport of microbes causing Kawasaki disease outbreaks.
  </Typography>
</CardContent>

        </Grid>
      </Grid>
    </Card>
  );
};

export default DescriptionSection;
