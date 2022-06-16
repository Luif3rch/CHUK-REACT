import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Copyright from '../components/Copyright';


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

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
          <Avatar sx={{ m: 3, bgcolor: 'secondary.main' }}>
            <LockOpenIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
          ForgetPass
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="keypass"
                  label="The meaning of life, the universe and everything else?"
                  type="password"
                  id="keypass"
                  autoComplete="new-keypass"
                />
              </Grid>
              <Grid item xs={12}>
              <Typography  href="" variant="body2">
                The Answers is 42
              </Typography>
              </Grid>
           
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Recover password
            </Button>

           
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                Have you already recorded your password? 
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


