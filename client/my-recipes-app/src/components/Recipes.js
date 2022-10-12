// Recipes.js modifié le 26sept 2022 celui ci skip le bouton click pour afficher
//***********************************************************************************
// Recipes.js modifié le 23 sept 2022
//***********************************************************************************
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipesList from "./RecipesList";

import '../App.css';

// La fct(Recipes) Permet d'aller chercher les données du DB par:
// la fct(fetchRecipes)
// Puis elles les map par la fct(RecipeList)
// ensuite utilise la fct(Recipe) pour afficher la liste des données 
// supprimer et modifier qui sont liées aux fct(DeleteRecipe et EditRecipe)
// ====================================================================================================================

// Debut fct Recipes**************************************************************

function Recipes() {
  // ******** fetchRecipes: va chercher la liste des recettes dans la Base de Donnée -MySql
  const [recipes, setRecipes] = useState([]);
    useEffect(() => {
      fetchRecipes();
    }, []);
    const fetchRecipes = () => {
      axios
        .get('http://localhost:5500/api/recipesDb')
        .then((res) => {
          setRecipes(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
  };
  // ******** fin du fetchRecipes

  return (
    <React.Fragment>
      
      <div id="image-display"> 
      
      <div className='recipes-container'>
          <RecipesList recipes={recipes} />
      </div>
      </div>
    </React.Fragment>
  );
}
// Fin fct Recipes**************************************************************
export default Recipes;
