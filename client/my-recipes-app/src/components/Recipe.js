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
    <div className="recipe-card">
      <h2 className="card-name">{props.name.toUpperCase()}</h2>
      <div className="recipe-button-container">
        <button className="button-del" onClick={() => deleteRecipe(props.id)}>Supprimer</button>
        <button className="button-edit" onClick={() => navigate("/edit-recipe", { state: { id: props.id } })}>Modifier</button>
      </div>
    </div>
  );
};

export default Recipe;
// fin fct recipe***********************************************
