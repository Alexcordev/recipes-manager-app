// Addrecipe.js modifié le 23 sept 2022

import React, { useState } from "react";

import '../App.css';

const AddRecipe = (props) => {
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: "",
    preparation: "",
  });

  const handleSubmit = (event) => {
    let { name, ingredients, preparation } = recipe;
    document.getElementById("create-recipe-form").reset();
    fetch("http://localhost:5500/api/addRecipeDb", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        ingredients: ingredients,
        preparation: preparation,
      }),
      headers: { "Content-Type": "application/json" },
    }).catch((err) => console.error(err));
    console.log(recipe.name, recipe.ingredients, recipe.preparation);
    alert("Recette Ajoutée avec succès");
  };
  // ajout de recette
  return (
    <div id="add-image">
      <div className="card">
        <div className="card-header"><h1>Ajoutez Votre Recette</h1></div>
      <form id="create-recipe-form" onSubmit={handleSubmit}>
        
          <input className="name"
            type="text"
            value={recipe.name}
            onChange={(ev) => setRecipe({ ...recipe, name: ev.target.value })}
            placeholder="Name"
            />
          <textarea className="ingredients"
            type="text"
            value={recipe.ingredients}
            onChange={(ev) =>
              setRecipe({ ...recipe, ingredients: ev.target.value })
            }
            placeholder="Ingredients"
          />
         <textarea className="preparation"
            type="text"
            value={recipe.preparation}
            onChange={(ev) =>
              setRecipe({ ...recipe, preparation: ev.target.value })
            }
            placeholder="Preparation"
         />

        <div className="field">
          <button className="button-container">Ajouter</button>
        </div>
        
      </form>
    </div>
    </div>
  );
};

export default AddRecipe;
//<input type="submit" value="Ajouter" />