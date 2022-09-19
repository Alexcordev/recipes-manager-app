//import React, { useState } from "react";
import deleteRecipe from "./DeleteRecipe";
import { useNavigate } from "react-router-dom";

import "../App.css";

// debut fonction recipe ***************************************************

// Affiche les recettes plus les boutons supprimer et modifier
const Recipe = (props) => {
  // navigate utiliser pour Edit-recipe
  const navigate = useNavigate();

  return (
    <div className="card">
      <h2 className="name">{props.name.toUpperCase()}</h2>
      <span className="ingredient">{props.ingredients}</span>
      <p className="preparation">{props.preparation}</p>
      <div className="button-container">
        <button className="buttonSupp" onClick={() => deleteRecipe(props.id)}>
          Supprimer
        </button>
        <button
          className="buttonEdit"
          onClick={() => navigate("/edit-recipe", { state: { id: props.id } })}
        >
          Modifier
        </button>
      </div>
    </div>
  );
};

export default Recipe;
// fin fct recipe***********************************************
