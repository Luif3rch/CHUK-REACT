import React, { useEffect, useState } from "react";
import Navdark from '../components/Navdark';

import Chucknorris from '../img/chuck-norris.png';
import '../styles/home.scss'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';

function Home() {
 
  const [categorys, setCategorys] = useState([])


  const urlCategories = "https://api.chucknorris.io/jokes/categories";

  const fetchCategories = async () => {
    fetch(urlCategories)
    .then(res => res.json())
    .then(data => setCategorys(data))
    .catch(error => console.error("Error:", error))   
  };


  useEffect(() => {
    fetchCategories(urlCategories);

  }, [])

  const [checked, setChecked] = useState([]);

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Generate string of checked items
var checkedItems = checked.length
? checked.reduce((total, item) => {

  
    localStorage.setItem("chuckCategories",JSON.stringify(total + ", " + item));
    return total + ", " + item;

  })
: "";

const listItems = categorys.map((categoria) =>
    <Container maxWidth="xs" key={categoria}>
     

                <FormControlLabel control={<Checkbox value={categoria} onChange={handleCheck} color="error" />} label={categoria} />
   
    </Container>
   
);

const handleSubmit = (event) => {
  
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  var items = ({checkedItems}) ;
  console.log({
    categories: data.get(items),
  });
 

 
};








  return (
    <>
    <Navdark/ >
    <div className="lista">
    <img src={Chucknorris} className="center-chuck" alt="chucknorris" />
      <h1>Choose your favorite categories</h1>
      <Container maxWidth="xs">
      <h3>
        {`Categories checked are: ${checkedItems}`}
      </h3>
      </Container>
     
      
      <Container maxWidth="xs">
        
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>

        <FormGroup>
        {listItems}
        </FormGroup>
          <Button  type="submit"
              fullWidth
              variant="contained" 
              color="error"
              sx={{ mt: 3, mb: 2 }}>
            SAVE SELECTION OF CATEGORIES
          </Button>
        </Box>
      </Container>
      
      
    </div>
    </>
  )
}

export default Home;