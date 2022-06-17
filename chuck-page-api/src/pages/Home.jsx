import React from 'react'
import Navdark from '../components/Navdark';
import Chucknorris from '../img/chuck-norris.png';
import '../styles/home.scss'

function Home() {
  return (
    <>
    
    <Navdark/ >
    <div>

    <img src={Chucknorris} className="center" alt="Chuck Logo"/>
    <h1> Elige tus categorias favoritas</h1>
    
    </div>


    </>

  )
}

export default Home;