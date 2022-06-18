import React, { useState } from "react";


import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import Copyright from '../components/Copyright';

//import uuid v4
import { v4 as uuid } from 'uuid';

  const unique_id = uuid();
  const small_id = unique_id.slice(0,8)
  



export default function SignUp() {
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
  

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  
 
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get('username'),
      password: data.get('password'),
      id:small_id,
    });
    if (!username ||!password) {
      setFlag(true);
     
    } else {
      setFlag(false);
   
      localStorage.setItem(
        "chuck1-ID",
         JSON.stringify(small_id));

      localStorage.setItem(
        "chuckUser",
         JSON.stringify(username));

      localStorage.setItem(
        "chuckPassword",
        JSON.stringify(password)
      );
      
      console.log("Saved in Local Storage");
     
      alert("✅ SIGN UP SUCCESSFUL ✅");  
      setLogin(!login);
    }

  
  };



  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          {flag && (

            <Alert severity="error">
              <AlertTitle>🤔 🛑maybe you forgot a field 🛑 </AlertTitle>
            </Alert>
              )}
              
               Sign up 
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
             
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Grid>
             
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in  
                 
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />

        
      </Container>
    </ThemeProvider>
  );
}