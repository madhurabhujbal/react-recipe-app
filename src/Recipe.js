import React from "react";
import style from "./recipe.module.css";

const Recipe = ({
  title,
  calories,
  dietLabels,
  image,
  ingredients,
  recipeUrl,
}) => {
  return (
    <div className={style.recipe}>
      <a href={recipeUrl}>
        <h1>{title}</h1>
      </a>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p style={{ color: "red", fontWeight: "bold" }}>
        {"Calories: " + calories.toFixed(2) + "C"} &nbsp;
        {"Diet Labels: " +
          (dietLabels.length !== 0 ? dietLabels : "Currently not available")}
      </p>
      <img className={style.image} src={image} alt="recipe-image" />
    </div>
  );
};

export default Recipe;
