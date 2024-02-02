import React, {useState} from 'react'; 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Logo from '../assets/chapman_logo.png'; // Import the logo image
import { Link, useMatch, useResolvedPath} from 'react-router-dom';

const Navbar = () => {
  const [navIsShown, setnavIsShown] = useState(false);
  const toggleNavIsShown = () => {
    setnavIsShown((navIsShown) => !navIsShown);
  };
  return (
    <AppBar position="relative" sx={{ backgroundColor: 'white', borderBottom: '5px solid #a50034', borderTop: '5px solid #a50034'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              flexGrow: 1, // Move the logo to the left
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {/* Replace text-based logo with the image variable */}
            <img src={Logo} alt="Chapman Logo" style={{ height: '60px'}} />
          </Typography>
          <Box
            sx={{
              flexGrow: 1, // Move the pages section to the right
              display: 'flex',
              justifyContent: 'flex-end', // Align to the right
              alignItems: 'center', // Vertically align to the center
            }}
          >
            <Button component={CustomLink} to="/" sx={{ my: 5, color: 'black', fontSize: '20px', fontWeight: '350' }}>
              HOME
            </Button>
            <Button component={CustomLink} to="/members" sx={{ my: 5, color: 'black', fontSize: '20px', fontWeight: '350' }}>
              MEMBERS
            </Button>
            <Button component={CustomLink} to="/research" sx={{ my: 5, color: 'black', fontSize: '20px', fontWeight: '350' }}>
              RESEARCH
            </Button>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
export default Navbar;
