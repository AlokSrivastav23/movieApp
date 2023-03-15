import React, {useState} from 'react';
import axios from 'axios';
//These lines import the React library and the useState hook from it, as well as the Axios library for making HTTP requests.

function App() {
  const [text,setText] =useState("search movie")
  const [movie,setMovie] =useState([])
  
//This defines a functional component called App that uses the useState hook to manage two pieces of state: text and movie. 
//text represents the current value of the search input field, and is initialized to "search movie". 
//movie is an array that will hold the search results from the OMDb API, and is initially empty.

const changeText = (event)=>{
  // console.log(event);
  setText(event.target.value)
}

// This defines a function changeText that will be called when the user types into the search input field. 
// It updates the text state to the current value of the input field.


const getMovie =(e)=>{
  e.preventDefault();

  axios.get( `https://www.omdbapi.com/?s=${text}&apikey=aaa9a7c2`)
  .then((response)=>{
    console.log(response);
    setMovie(response.data.Search)
  })
}


//This defines a function getMovie that will be called when the user submits the search form. It prevents the default 
//form submission behavior, sends a GET request to the OMDb API with the current value of the search input field, and then updates the movie state 
//with the search results returned by the API.

return (
  <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  ...
  </nav>
  <div className='container my-3'>
  ...
  </div>
  </>
);


//This is the JSX code that defines the UI of the app. It contains a navbar with a search form
//and a container that displays movie cards.


{
  movie.map((value, index) => {
    return (
      <div className="col-3">
        <div className="card" style={{ width:"18rem" }}>
          <img src={value.Poster} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h3 className="card-title">{value.Year}</h3>
            <h4 className="card-text">{value.Title}</h4>
          </div>
        </div>
      </div>
    )
  })
}


//This is a code block inside the JSX that uses the map method to loop over the movie array and generate a movie 
//card for each item in the array. Each card displays the movie title, year, and poster image.

//Overall, this app is a simple example of how to use React to make HTTP requests to an API
//and display the response data in a user interface.


