import React, { useEffect, useState } from "react";
import Navdark from '../components/Navdark';

import Chucknorris from '../img/chuck-norris.png';
import '../styles/home.scss'

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
<div className="row">
    <div key={categoria.toString()} className="center p-2 d-grid gap-3 col-8">
    <div className="form-check">
      <input className="h4 form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"></input>
      <label className="h4 form-check-label" for="flexCheckIndeterminate">
      {categoria}</label>
     
    </div>
     

    </div>
</div>
);




  return (
    <>
    <Navdark/ >
    <div className="lista">
    <img src={Chucknorris} className="center" alt="chucknorris" />
      <h1>Elige tus categorias favoritas</h1>
      <div>{listItems}</div>

    </div>
    </>
  )
}

export default Home;