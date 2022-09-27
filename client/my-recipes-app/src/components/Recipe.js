// Recipe.js modifié le 23 sept 2022
//***********************************************************************************

import deleteRecipe from "./DeleteRecipe";
import { useNavigate } from "react-router-dom";

import "../App.css";

// debut fonction recipe ***************************************************

// Affiche les recettes plus les boutons supprimer et modifier
const Recipe = (props) => {
  // navigate utiliser pour Edit-recipe
  const navigate = useNavigate();

  return (
    <div>
     
      <ul className="recipe">

        
        <li className="recipe-name"> {props.name.toUpperCase()} </li>

        <button className="recipe-buttons" onClick={
          () => navigate("/recipe-aff", { state: { id: props.id } })}>
          Afficher
        </button>

        <button className="recipe-buttons" onClick={
          () => navigate("/add-recipe", { state: { id: props.id } })}>
          Ajouter
        </button>

        <button className="recipe-buttons" onClick={
            () => navigate("/edit-recipe", { state: { id: props.id } })}>
            Modifier
        </button>

        <button className="recipe-buttons" onClick={() => deleteRecipe(props.id)}>
          Supprimer
        </button>
      </ul>
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
