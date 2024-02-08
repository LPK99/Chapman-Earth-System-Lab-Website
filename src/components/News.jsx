import React from 'react';
import { Box, Typography, List, ListItem} from '@mui/material';

// Example news headlines data
const newsHeadlines = [
  { id: 1, title: 'Student researchers positions available currently' },
  { id: 2, title: 'Lab newly developed websites' },
  { id: 3, title: 'Upcoming researche papers in 2024' },
];

const NewsSection = () => {
  return (
    <Box sx={{ p: 3, bgcolor: 'background.paper', color: 'text.primary' , borderTop: '4px solid #a50034', borderBottom: '4px solid #a50034', // Red border
    borderRadius: '5px', // Rounded corners
    padding: '20px', // Spacing inside the border
    width: '80%', // Adjust width to make the box smaller
    mx: 'auto', // Margin on the X-axis to auto for centering
    display: 'flex', // Ensures content is properly aligned
    flexDirection: 'column', // Stacks children vertically
    alignItems: 'center', // Aligns children to the center
    justifyContent: 'center'}}>
      <Typography variant="h4" gutterBottom fontSize='30px' textAlign='center'>
        Latest News
      </Typography>
      <List>
        {newsHeadlines.map((news) => (
          <ListItem key={news.id} divider>
            <Typography variant="h4" gutterBottom fontSize='24px' textAlign='center' fontStyle='italic' italictextDecoration='underline' fontColor='#a50034'>
                {news.title}
            </Typography>
            </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default NewsSection;
