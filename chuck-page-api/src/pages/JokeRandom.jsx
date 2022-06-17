import React from 'react'
import Joke from "../components/Joke";
import Navdark from '../components/Navdark';
//STYLEs


const JokeRandom = () =>{

  const [joke, setJoke] = React.useState({});
  const [newJoke, setNewJoke] = React.useState(true);

  React.useEffect(() =>{

      const dispalyJokes = async () =>{
  
          const response = await fetch("https://api.chucknorris.io/jokes/random");
          const data = await response.json();
          setJoke(data);
  
      };
      dispalyJokes();

  }, [newJoke]);

  const newJokeF = () =>{

      setNewJoke(prevNewJoke => !prevNewJoke);

  };

  return(

      <>

          <Navdark/ >
            <Joke
              joke={joke.value}
              new={newJokeF}
          />
         
     
      </>
  );
};

export default JokeRandom;