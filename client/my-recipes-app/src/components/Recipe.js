// Recipe.js modifié le 23 sept 2022
//***********************************************************************************
import React from "react";
import deleteRecipe from "./DeleteRecipe";
import { useNavigate } from "react-router-dom";

import "../App.css";

// debut fonction recipe ***************************************************

// Affiche les recettes plus les boutons supprimer et modifier
const Recipe = (props) => {
  // navigate utiliser pour Edit-recipe
  const navigate = useNavigate();

  return (
    <div className="recipe-card">
      <h2 className="card-name">{props.name.toUpperCase()}</h2>
      <div className="recipe-button-container">
        <button className="button-details" onClick={() => navigate("/recipe-aff", { state: { id: props.id } })}>Détails</button>
        <button className="button-del" onClick={() => deleteRecipe(props.id)}>Supprimer</button>
        <button className="button-edit" onClick={() => navigate("/edit-recipe", { state: { id: props.id } })}>Modifier</button>
      </div>
    </div>
  );
};

export default Recipe;
// fin fct recipe***********************************************
/*
<div className="recipe">
      <h2 className="recipe-name">{props.name.toUpperCase()}</h2>
      <h2 className="recipe-ingredient">{props.ingredients}</h2>
      <p className="recipe-preparation">{props.preparation}</p>
      <div className="recipe-buttons">
        <button onClick={() => deleteRecipe(props.id)}>Supprimer</button>
        <button onClick={() => navigate("/edit-recipe", { state: { id: props.id } })}>Modifier</button>
      </div>
    </div>
    */
