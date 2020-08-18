import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  //id and key for edamam.com REST API for recipe request
  const APP_ID = "449006bf";
  const APP_KEY = "ab47742811a6686862dfffde29f0722f";

  const [recipes, setRecipes] = useState([]); //All recipes are stored in 'recipes' through setRecipes
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    //runs every time page renders
    getRecipes();
  }, [query]); // [] will enable useEffect to run only once when page is rendered.

  // useEffect(() => {
  //   console.log("Effect has been run");
  // }, [counter]); // [] will enable useEffect to run every time the counter changes its state

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value); //value of input entered by user
  };

  const getSearch = (e) => {
    //Call this function only when search button is clicked
    e.preventDefault(); //prevents search as user types in search field
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label} //Next 3 properties are called props which are simple objects in JS. key is spcl prop
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
};

export default App;
