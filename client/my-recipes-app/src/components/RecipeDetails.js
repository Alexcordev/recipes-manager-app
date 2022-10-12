// Recipe.js modifié le 23 sept 2022
//***********************************************************************************
import React from "react";
import { useNavigate } from "react-router-dom";

import "../App.css";

// debut fonction recipe ***************************************************

// Affiche les recettes plus les boutons supprimer et modifier
const RecipeDetails = (props) => {
  // navigate utiliser pour Edit-recipe
  const navigate = useNavigate();

  return (
    <div className="recipe-card-details">
      <h2 className="recipe-title">{props.name.toUpperCase()}</h2>
      
      <div className="preparation-par">
        <div><h2>Ingrédients</h2></div>
        <div className="preparation-ing">
        {props.output.map((ing) => {
            return <span className="ing-item">{ing}</span>;
          })}
        </div>
          
        </div>

        <div className="preparation-par">
          <h2>Préparation</h2>
          <p>{props.preparation}</p>
        </div>
      <div className="recipe-button-container">
        
      </div>
    </div>
  );
};

export default RecipeDetails;