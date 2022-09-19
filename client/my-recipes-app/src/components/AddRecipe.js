import React, { useState } from "react";

const AddRecipe = (props) => {
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: "",
    preparation: "",
  });

  const handleSubmit = (event) => {
    let { name, ingredients, preparation } = recipe;
    document.getElementById("create-recipe-form").reset();
    fetch("http://localhost:5500/api/add-recipe", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        ingredients: ingredients,
        preparation: preparation,
      }),
      headers: { "Content-Type": "application/json" },
    }).catch((err) => console.error(err));
    console.log(recipe.name, recipe.ingredients, recipe.preparation);
    alert("Recipe added");
  };
  // ajout de recette
  return (
    <div>
      <h1>Ajoute Ta Recette</h1>
      <form id="create-recipe-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={recipe.name}
          onChange={(ev) => setRecipe({ ...recipe, name: ev.target.value })}
          placeholder="NameEng"
        />
        <input
          type="text"
          value={recipe.ingredients}
          onChange={(ev) =>
            setRecipe({ ...recipe, ingredients: ev.target.value })
          }
          placeholder="Ingredients"
        />
        <input
          type="text"
          value={recipe.preparation}
          onChange={(ev) =>
            setRecipe({ ...recipe, preparation: ev.target.value })
          }
          placeholder="Preparation"
        />
        <input type="submit" value="Ajouter" />
      </form>
    </div>
  );
};

export default AddRecipe;
