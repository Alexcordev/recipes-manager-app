// RecipesList.js modifié le 23 sept 2022
//***********************************************************************************
import React from "react";
import Recipe from "./Recipe";

import '../App.css';

// ******* Map la liste des recettes
const RecipesList = (props) => {
    return (
      <div className="wrap-container">
        {props.recipes.map((recipe) => {
          return (
            <Recipe
              key={recipe.id}
              name={recipe.name}
              ingredients={recipe.ingredients}
              preparation={recipe.preparation}
              id={recipe.id}
            />
          );
        })}
      </div>
    );
  };

  export default RecipesList;
  // ******* Fin Mappage Liste recettes