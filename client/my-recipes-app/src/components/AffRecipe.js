// AffRecipe.js en traitement

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import "../App.css";

function AffRecipe(id) {
  const RecipeA = (props) => {
    return (
      <div className="aff-card">
        
          <div className="aff-card-name"> {props.name.toUpperCase()} </div>
          <h2 className="aff-card-ingredient">
            <h3 className="aff-card-ingredient-line">Ingrédients :</h3>
            {props.ingredients}
          </h2>
          <p className="aff-card-preparation">
            <h3 className="aff-card-ingredient-line">Préparation :</h3>
            {props.preparation}
          </p>
               
      </div>
    );
  };
  // fin RecipeA

  const RecipeAsked = (props) => {
    return (
      <div className="recipesList-wrap">
        {props.recipes.map((recipe) => {
          return (
            <RecipeA
              key={recipe.id}
              name={recipe.name}
              ingredients={recipe.ingredients}
              preparation={recipe.preparation}
              id={recipe.id}
            />
          );
        })}
      </div>
    );
  };
  // fin recipeListA



  const [recipes, setRecipes] = useState([]) 
    useEffect(() => {fetchRecipes();}, []);
    const fetchRecipes = () => {
      axios
      .get(`http://localhost:5500/api/affRecipeDb`)
        .then((res) => {
          console.log(res);
          setRecipes(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  return (
    <React.Fragment>
      {recipes.length === 0 && <div id="image-affichage"> </div> }
      <section>
        <h1>Affichage de la Recette Demandée</h1>
        <RecipeAsked recipes={recipes} />
      </section>
    </React.Fragment>
  );
}

export default AffRecipe

// .get(`http://localhost:5500/api/AffRecipeDb/${id}`)
