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
    alert("Recette Ajoutée avec succès");
  };
  // ajout de recette
  return (
    <div>
      <h1>Ajoutez Votre Recette</h1>
      <form className="card" id="create-recipe-form" onSubmit={handleSubmit}>
        <h2>
          <input className="name"
            type="text"
            value={recipe.name}
            onChange={(ev) => setRecipe({ ...recipe, name: ev.target.value })}
            placeholder="Name"
            />
        </h2>
        
        <h2>
          <input className="ingredient"
            type="text"
            value={recipe.ingredients}
            onChange={(ev) =>
              setRecipe({ ...recipe, ingredients: ev.target.value })
            }
            placeholder="Ingredients"
          />
        </h2>
        
        <p>
          <input calssName="preparation"
            type="text"
            value={recipe.preparation}
            onChange={(ev) =>
              setRecipe({ ...recipe, preparation: ev.target.value })
            }
            placeholder="Preparation"
         />
        </p>

        <div className="field">
          <button>Ajouter</button>
        </div>
        
      </form>
    </div>
  );
};

export default AddRecipe;
//<input type="submit" value="Ajouter" />