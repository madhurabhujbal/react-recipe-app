import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  //id and key for edamam.com REST API for recipe request
  const APP_ID = "449006bf";
  const APP_KEY = "ab47742811a6686862dfffde29f0722f";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  );
};

export default App;
