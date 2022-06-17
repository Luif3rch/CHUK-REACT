import React, { useEffect, useState } from "react";


import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Form, Alert } from "react-bootstrap";

//componentes
import Copyright from '../components/Copyright';
import ChuckGif from '../img/ChuckGif.gif';
import Home from "./Home";


export default function SignInSide() {


  const theme = createTheme({
    palette: {
      primary: {
        main: '#e53935',
      },
      secondary: {
        main: '#d32f2f',
      },
    },
  });
  
  const [flag, setFlag] = useState(false);
  const [usernamellog, setUsernamelog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");
  const [home, setHome] = useState(true);

  useEffect(() => {
    console.log('SignInSide');
  }, [])

//
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    ///te
    console.log({
      username: data.get('username'),
      password: data.get('password'),
      
    });

    let pass = localStorage
      .getItem("chuckPassword")
      .replace(/"/g, "");
    let user = localStorage.getItem("chuckUser").replace(/"/g, "");
    

    if (!usernamellog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || usernamellog !== user) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }

 


  };



  return (
    <ThemeProvider theme={theme}>
    {home ? (
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://www.pngitem.com/pimgs/m/157-1579962_chuck-norris-chuck-norris-cartoon-pics-transparent-hd.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <img src={ChuckGif} alt="Chuck" />
            </Avatar>


            <Typography sx={{ fontWeight: 1000, m: 1 }} component="h1" variant="h5" >
            {flag && (
                <Alert color="primary" variant="danger">
                🤯 Are you sure you're okay? 
                  maybe you forgot your password or username 😳
                </Alert>
              )}
             CHUCK PAGE API
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                autoFocus
                label="username"
                autoComplete="username"
                onChange={(event) => setUsernamelog(event.target.value)}
                
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                autoComplete="password"
                onChange={(event) => setPasswordlog(event.target.value)}
              />


              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: 'error.main' } }
                
              >
                Sign In
              </Button>
              
              <Grid container>
                <Grid item xs>
                  <Link href="/ForgetPass" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/SignUp" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
      ) : (
        <Home />
      )}
    </ThemeProvider>
  );
}



