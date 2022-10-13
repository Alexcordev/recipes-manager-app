// Editrecipe.js
//***********************************************************************************
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
//import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
 
const EditRecipe = () => {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [preparation, setPreparation] = useState('');
   
    const { state } = useLocation();
    const { id } = state; // Read values passed on state
 
    const updateRecipe = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5500/api/editRecipeDb/${id}`,{
            name: name,
            ingredients: ingredients,
            preparation: preparation
        });
        alert("Recette Modifiée 1 avec succès");
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
    <div id="image-edit">
      <form className="card" onSubmit={updateRecipe}>
        <h1>Modifiez Votre Recette</h1>
        <input
          className="name"
          type="text"
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          className="ingredients"
          type="text"
          placeholder="Ingrédients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />

        <textarea
          className="preparation"
          type="text"
          placeholder="Préparation"
          value={preparation}
          onChange={(e) => setPreparation(e.target.value)}
        />

        <div className="recipe-button-container">
          <button className="button-edit" type="submit">
            Modifier
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditRecipe;

