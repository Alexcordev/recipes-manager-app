// Recipes.js modifié le 26sept 2022 celui ci skip le bouton click pour afficher
//***********************************************************************************
// Recipes.js modifié le 23 sept 2022
//***********************************************************************************
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipesList from "./RecipesList";

// La fct(Recipes) Permet d'aller chercher les données du DB (My Sql) par:
// la fct(getRecipes)
// Puis elles les map par la fct(RecipeList)
// ensuite utilise la fct(Recipe) pour afficher la liste des données avec les boutons
// supprimer et modifier qui sont liées aux fct(DeleteRecipe et EditRecipe)
// ====================================================================================================================

// Debut fct Recipes**************************************************************

function Recipes() {
  const [recipes, setRecipes] = useState([]) 
    useEffect(() => {fetchRecipes();}, []);
    const fetchRecipes = () => {
      axios
        .get('http://localhost:5500/api/recipes')
        .then((res) => {
          console.log(res);
          setRecipes(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
  };

    /* Affichage conditionnel (ligne 46) si le tableau recipes ne contient pas de recette, 
    à ce moment, l'image en background est affichée. Si le tableau contient des recettes, alors 
    l'image ne s'affiche pas. 
    La condition est entre { } c'est comme si on faisait un if et un else :
    if recipes.length === 0 {<div id="image-affichage"> </div>} 
    else {
    <section>
       <RecipesList recipes={recipes} />
    </section>
    }
  */
  return (
    <React.Fragment>
      {recipes.length === 0 && 
      <div id="image-affichage"> 
      </div> }
        <section>
        <h1>Affichage et modification des Recettes</h1>
          <RecipesList recipes={recipes} />
        </section>
    </React.Fragment>
  );
}
// Fin fct Recipes**************************************************************
export default Recipes;


/*
 // Recipes.js modifié le 23 sept 2022 Avec bouton Click pour afficher
//***********************************************************************************
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
  const getRecipes = (event) => {
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
      <div id="recipes-image"> 
        
          <section>
            <button className="recipes-button" onClick={getRecipes}>
              Click ici pour l'Affichage
            </button>
          </section>
          <section>
            <RecipesList recipes={recipes} />
          </section>
        
        </div>
    
  </React.Fragment>
  );
}
// Fin fct Recipes**************************************************************
export default Recipes;
  
*/