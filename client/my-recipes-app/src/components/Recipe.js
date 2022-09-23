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
    <div className="card">
      <h2 className="card-name">{props.name.toUpperCase()}</h2>
      <h2 className="card-ingredient">{props.ingredients}</h2>
      <p className="card-preparation">{props.preparation}</p>
      <div className="button-container">
        <button onClick={() => deleteRecipe(props.id)}>Supprimer</button>
        <button onClick={() => navigate("/edit-recipe", { state: { id: props.id } })}>Modifier</button>
      </div>
    </div>
  );
};

export default Recipe;
// fin fct recipe***********************************************
