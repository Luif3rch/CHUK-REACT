import '../styles/categories.scss'
import React, { useEffect, useState } from "react";
import Navdark from '../components/Navdark';
import Container from '@mui/material/Container';

export function Categories() {

  const [categorys, setCategorys] = useState([]);

  const [category2, setCategory2] = useState([]);
  const urlCategoriesUser = "https://api.chucknorris.io/jokes/categories";

  const fetchCategoriesUser = async () => {
    fetch(urlCategoriesUser)
      .then(res => res.json())
      .then(data => setCategory2(data))
      .catch(error => console.error("Error:", error));
  };


  useEffect(() => {
    fetchCategoriesUser(urlCategoriesUser);

  }, []);


  return (


    <>
      <Navdark />
      <h1 className='center'>{urlCategoriesUser}</h1>


    </>
  );
}
export default Categories;
