import React from "react";
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { experimentalStyled as styled } from '@mui/material/styles';
import '../styles/joke.scss'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const Joke = (props) =>{
    return(

        <div>
       
                <img src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"  alt="" className="center" />
                       
        

                <p className="joke">{props.joke}</p>
        
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs md={4}></Grid>

                        <Grid item xs md={4}>
                        <Item> <Button variant="contained"  color="error" onClick={props.new}> RANDOM JOKE </Button> </Item>
                        </Grid>  

                        <Grid item xs md={4}></Grid>
                    
                    </Grid>
                </Box>
                              
                        
                          
         
          


           

        </div>

    );
};

export default Joke;