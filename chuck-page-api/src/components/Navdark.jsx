import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import ChuckGif from '../img/ChuckGif.gif';



const Navdark = () => {


  return (
    <AppBar
    position="static"
    color="error"
    elevation={0}
    sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
  >
    <Toolbar sx={{ flexWrap: 'wrap' }}>
      <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
        <img src={ChuckGif} alt="Chuck Logo" />
        CHUCK PAGE API
      </Typography>
      <nav>
        <Link
          variant="button"
          color="inherit"
          href="Home"
          sx={{ my: 1, mx: 1.5 }}
        >
          Home
        </Link>
        <Link
          variant="button"
          color="inherit"
          href="Categories"
          sx={{ my: 1, mx: 1.5 }}
        >
          CATEGORIES
        </Link>
        <Link
          variant="button"
          color="inherit"
          href="/JokeRandom"
          sx={{ my: 1, mx: 1.5 }}
        >
         JOKE RANDOM
        </Link>
      </nav>
      <Button href="/"  color="inherit" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
        Login out
      </Button>
    </Toolbar>
  </AppBar>
  );
};
export default Navdark;

