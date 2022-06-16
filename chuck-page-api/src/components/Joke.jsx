import React from "react";

const Joke = (props) =>{
    return(

        <div className="overlay">

            <a href="https://api.chucknorris.io" target="_blank" rel="noreferrer">
                <img src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png" alt="" className="cn-image" />
            </a>
            <button onClick={props.new} className="button-new-joke">New Joke</button>

            <h1 className="joke">{props.joke}</h1>

        </div>

    );
};

export default Joke;