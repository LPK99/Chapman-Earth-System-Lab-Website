import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Container } from '@mui/material';
import Hesham_El_Askary_profile from '../assets/member_profile/El-Askary_H.jpg'
import Nicholas_Lahayle_profile from '../assets/member_profile/Nicholas_LaHaye.jpeg'
import Rejoice_Thomas_profile from '../assets/member_profile/rejoice_thomas.jpeg'
import Sachi_Perera_profile from '../assets/member_profile/sachi_perera.png'
import Wenzhao_Li_profile from '../assets/member_profile/wenzhao_li.jpeg'
import Nikolay_Grisel_Todorov_profile from '../assets/member_profile/Nikolay_Grisel_Todorov.jpeg'
import Shahryar_Fazli_profile from '../assets/member_profile/sharyar_fazli.jpeg'
import Surendra_Maharjan_profile from '../assets/member_profile/surendra_maharjan.jpeg'
import Justin_Le from '../assets/member_profile/justin_le.jpeg'
import Luciano_Rodriguez_profile from '../assets/member_profile/Luciano_Rodriguez.jpeg'
import Justin_Gapper_profile from '../assets/member_profile/justin_gapper.jpeg'

const members = [
    {
      name: 'Dr. Hesham El-Askary',
      description: 'Professor Computational and Data Science Graduate Programs, Chapman University',
      imageUrl: Hesham_El_Askary_profile,
      linkedinUrl: 'https://www.linkedin.com/in/hesham-el-askary-04b2a126/'
    },
    {
      name: 'Dr. Nicholas LaHaye',
      description: 'Data Scientist, Jet Propulsion Laboratory, California Institute of Technology',
      imageUrl: Nicholas_Lahayle_profile,
      linkedinUrl: 'https://www.linkedin.com/in/nicholas-lahaye-500a9b22/'
    },
    {
      name: 'Rejoice Thomas',
      description: 'Ph.D. Candidate, Chapman University',
      imageUrl: Rejoice_Thomas_profile,
      linkedinUrl: 'https://www.linkedin.com/in/rejoice-thomas-04403516b/'
    },
    {
      name: 'Sachi Perera',
      description: 'Ph.D. Candidate, Chapman University',
      imageUrl: Sachi_Perera_profile,
      linkedinUrl: 'https://www.linkedin.com/in/sachi-perera-07aa2667/' // Note: This uses the same image as Rejoice Thomas. You might want to update it if that's a mistake.
    },
    {
      name: 'Dr. Wenzhao Li',
      description: 'Research Associate, Chapman University',
      imageUrl: Wenzhao_Li_profile,
      linkedinUrl: 'https://www.linkedin.com/in/wenzhao-li-8221b565/'
    },
    {
      name: 'Nikolay Grisel Todorov',
      description: 'Ph.D. Candidate, Chapman University',
      imageUrl: Nikolay_Grisel_Todorov_profile,
      linkedinUrl: 'https://www.linkedin.com/in/ngtodorov/'
    },
    {
      name: 'Shahryar Fazli',
      description: 'Ph.D. Candidate, Chapman University',
      imageUrl: Shahryar_Fazli_profile,
      linkedinUrl: 'https://www.linkedin.com/in/shahryar-fazli-094b17111/'
    },
    {
      name: 'Surendra Maharjan',
      description: 'Ph.D. Candidate, Chapman University',
      imageUrl: Surendra_Maharjan_profile,
      linkedinUrl: 'https://www.linkedin.com/in/surendra-maharjan-a0271326b/'
    },
    {
      name: 'Dr. Justin Le',
      description: 'Software Engineer, Google',
      imageUrl: Justin_Le,
      linkedinUrl: 'https://www.linkedin.com/in/lejustin/'
    },
    {
      name: 'Dr. Luciano Rodriguez',
      description: 'Professor Mathematics and Computer Science, Fullerton College',
      imageUrl: Luciano_Rodriguez_profile,
      linkedinUrl: 'https://www.linkedin.com/in/luciano-rodriguez-80949756/'
    },
    {
      name: 'Dr. Justin Gapper',
      description: 'Head of WW Installments Science and Engineering, Amazon',
      imageUrl: Justin_Gapper_profile,
      linkedinUrl: 'https://www.linkedin.com/in/justingapper/'
    }
  ];
  
  const MemberSection = () => {
    return (
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ marginTop: 10, marginBottom: 8, fontWeight: 450, color: "#231f20", boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }}>
         Research Members
        </Typography>
        <Grid container spacing={4} sx={{ marginBottom: 15 }}>
          {members.map((member) => (
            <Grid item xs={12} sm={6} md={3} key={member.name}>
              <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Card sx={{ maxWidth: 345, boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={member.imageUrl}
                    alt={member.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.description}
                    </Typography>
                  </CardContent>
                </Card>
              </a>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  };
  
  export default MemberSection;
  
