
import React from "react";
import { useNavigate } from "react-router-dom";

import "../App.css";

// debut fonction recipe ***************************************************

// Affiche les recettes plus les boutons supprimer et modifier
const CategoryItem = (props) => {
  // navigate utiliser pour Edit-recipe


  return (
    <div className="recipe-card">
      <h2 className="card-name">{props.name.toUpperCase()}</h2>
      
    </div>
  );
};

export default CategoryItem;


