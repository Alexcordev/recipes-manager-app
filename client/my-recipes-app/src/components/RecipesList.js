// RecipesList.js modifié le 23 sept 2022
//***********************************************************************************
import React from "react";
import Recipe from "./Recipe";

import '../App.css';

// ******* Map la liste des recettes
const RecipesList = (props) => {
    return (
      <div className="recipesList-wrap">
        {props.recipes.map((recipe) => {
          return (
            <Recipe
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

  export default RecipesList;
  // ******* Fin Mappage Liste recettes


/*Pour afficher tes recettes sans devoir cliquer sur le bouton à chaque fois, 
tu dois faire une fonction similaire à celle-ci en utilisant la hook d'effets de React dans ton 
composant qui affiche les recettes.
UseEffect va s'exécuter lorsque que le state va changer et qu'il ne sera plus un tableau vide et à 
ce moment tes recettes s'afficheront au chargement de ta page.

const RecipesList = () => { 
   const [recipes, setRecipes] = React.useState([]) 
  
   useEffect(() => { 
     axios 
       .get("http://localhost:5500/api/recipes") 
       .then((res) => { 
         setRecipes(res.data) 
       }) 
   }) 
  
   return ( 
     {data.length > 0 &&  
       <Recipe recipes={recipes} />    } 
   ) 
 }
*/