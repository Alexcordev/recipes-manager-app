import React, { useState } from "react";
//import deleteRecipe from "./DeleteRecipe";
import RecipesList from "./RecipesList";
//import './style.css';

// La fct(Recipes) Permet d'aller chercher les données du DB par:
// la fct(getRecipes)
// Puis elles les map par la fct(RecipeList)
// ensuite utilise la fct(Recipe) pour afficher la liste des données avec les boutons
// supprimer et modifier qui sont liées aux fct(DeleteRecipe et EditRecipe)
// ====================================================================================================================

// Debut fct Recipes**************************************************************
function Recipes() {
  // ******** getRecipes: va chercher la liste des recettes dans la Base de Donnée -MySql
  const [recipes, setRecipes] = useState([]);
  const getRecipes = () => {
    fetch("http://localhost:5500/api/recipes")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const myRecipes = data.map((recipeData) => {
          return {
            id: recipeData.id,
            name: recipeData.name,
            ingredients: recipeData.ingredients,
            preparation: recipeData.preparation,
          };
        });
        console.log(myRecipes);
        setRecipes(myRecipes);
      });
  };
  // ******** fin du getRecipes

  

  return (
    <React.Fragment>
      <section>
        <button className="buttonList" onClick={getRecipes}>
          Voir Liste Des Recettes
        </button>
      </section>
      <section>
        <RecipesList recipes={recipes} />
      </section>
    </React.Fragment>
  );
}
// Fin fct Recipes**************************************************************
export default Recipes;
