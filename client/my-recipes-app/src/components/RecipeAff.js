// RecipeAff.js creer le 26 sept 2022
//***********************************************************************************
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';

// debut fonction recipeAff ***************************************************

const RecipeAff = () => {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [preparation, setPreparation] = useState('');
   
    const { state } = useLocation();
    const { id } = state; // Read values passed on state
 
    const updateRecipe = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5500/api/edit-recipe/${id}`,{
            name: name,
            ingredients: ingredients,
            preparation: preparation
        });
        alert("Recette Visualisée avec succès");
        //history.push("/");
    }
 
    useEffect(() => {getRecipeById(); }, []);
 
    const getRecipeById = async () => {
        const response = await axios.get(`http://localhost:5500/api/get-recipe-by-id/${id}`);
        console.log(response.data.data[0].name);
        setName(response.data.data[0].name);
        setIngredients(response.data.data[0].ingredients);
        setPreparation(response.data.data[0].preparation);
    }
 
    return (
        
        <div id="image-aff">
            
            <h1>Affichage de la recette choisie En Traitement</h1>

            <form className="card-input" onSubmit={ updateRecipe }>
                <h2>
                    <input
                        className="name"
                        type="text"
                        placeholder="Nom"
                        value={ name }
                        onChange={ (e) => setIngredients(e.target.value) }
                    
                   /> 
                </h2>
 
                <h2>                    
                    <textarea 
                        className="ingredient"
                        type="text"
                        placeholder="Ingrédients"
                        value={ ingredients }
                        onChange={ (e) => setIngredients(e.target.value) }
                    />
                </h2>

                <p>
                    <textarea
                        className="preparation"
                        type="text"
                        placeholder="Préparation"
                        value={ preparation }
                        onChange={ (e) => setPreparation(e.target.value) }
                    />
                </p>
 
               
                  
                
            </form>
        </div>
    )
       
}
 
//<button>Afficher</button> ligne 74
export default RecipeAff;
// fin fct recipe***********************************************

//<h2>Afficage de la recette choisie En Traitement</h2>

/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

  // ******** getRecipes: va chercher la liste des recettes dans la Base de Donnée -MySql
  function RecipeAff() {
    const [recipeAff, setRecipeAff] = useState([]) 
    useEffect(() => {fetchRecipeAff();}, []);
    const fetchRecipeAff = () => {
      axios
        .get('http://localhost:5500/api/recipe-aff')
        .then((res) => {
          console.log(res);
          setRecipeAff(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
  };
  // ******** fin du getRecipes 
  
  // ******* Map la liste des recettes
      const RecipesList = (props) => {
        return (
            <ul>
                {props.recipes.map((recipe) => {
                    return <Recipe 
                    key={recipe.id}  name={recipe.name} ingredients={recipe.ingredients} 
                    preparation={recipe.preparation} id={recipe.id}    
                    />
                })}
            </ul>
        )
      }
  // ******* Fin Mappage Liste recettes
  
  // debut fonction recipe ***************************************************
  
  // Affiche les recettes plus les boutons supprimer et modifier
      const Recipe = (props) => {
  
        // navigate utiliser pour Edit-recipe
        const navigate = useNavigate();
  
        return (
            <li>
                <h2 className='name'>{props.name.toUpperCase()}</h2>
                <h3 className='ingredient'>{props.ingredients}</h3> 
                <p className='preparation'>{props.preparation}</p>
                
                <button className='buttonEdit' onClick={() => navigate('/recipe-aff', { state: { id: props.id} })}>Affiche ta recette</button>
            </li>
        )
     }
  // fin fct recipe***********************************************
      
  return (
    <React.Fragment>
      {recipeAff.length === 0 && 
      <div id="image-affichage"> 
      </div> }
        <section>
        <h1>Affichage et modification des Recettes</h1>
          <RecipesList recipeAff={recipeAff} />
        </section>
    </React.Fragment>
  );
  }
  // Fin fct Recipes**************************************************************
  export default RecipeAff;
*/
