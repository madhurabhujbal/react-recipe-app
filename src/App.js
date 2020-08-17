import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  //id and key for edamam.com REST API for recipe request
  const APP_ID = "449006bf";
  const APP_KEY = "ab47742811a6686862dfffde29f0722f";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    //runs every time page renders
    console.log("Effect has been run");
  }, []); // [] will enable useEffect to run only once when page is rendered.

  // useEffect(() => {
  //   console.log("Effect has been run");
  // }, [counter]); // [] will enable useEffect to run every time the counter changes its state

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <h1 onClick={() => setCounter(counter + 1)}> {counter} </h1>
    </div>
  );
};

export default App;
