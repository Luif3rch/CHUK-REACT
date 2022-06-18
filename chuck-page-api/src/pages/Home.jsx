import React, { useEffect, useState } from "react";
import Navdark from '../components/Navdark';

import Chucknorris from '../img/chuck-norris.png';
import '../styles/home.scss'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'

function Home() {
 
  const [category, setCategory] = useState([])


  const urlCategories = "https://api.chucknorris.io/jokes/categories";

  const fetchCategories = async () => {
    fetch(urlCategories)
    .then(res => res.json())
    .then(data => setCategory(data))
    .catch(error => console.error("Error:", error))   
  };


  useEffect(() => {
    fetchCategories(urlCategories);

  }, [])
  


const listItems = category.map((categoria) =>
    <Container maxWidth="xs" key={categoria}>

          <FormControlLabel control={<Checkbox color="error" />} label={categoria} />

    </Container>
   
);




  return (
    <>
    <Navdark/ >
    <div className="lista">
    <img src={Chucknorris} className="center" alt="chucknorris" />
      <h1>Choose your favorite categories</h1>
      <FormGroup>
      {listItems}
      </FormGroup>
      <Container maxWidth="xs">
        <Button variant="contained" color="error">
          SAVE SELECTION OF CATEGORIES
        </Button>
      </Container>
      
    </div>
    </>
  )
}

export default Home;