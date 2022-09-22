/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
///import { useLocation } from "react-router-dom";
import axios from "axios";
import { useLocation } from 'react-router-dom';
 
const EditRecipe = () => {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [preparation, setPreparation] = useState('');
    //const history = useHistory();
    //const { id } = useParams();
    const { state } = useLocation();
    const { id } = state; // Read values passed on state
 
    const updateRecipe = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5500/api/edit-recipe/${id}`,{
            name: name,
            ingredients: ingredients,
            preparation: preparation
        });
        alert("Recette Modifiée avec succès");
        //history.push("/");
    }
 
    useEffect(() => {
        getRecipeById();
    }, []);
 
    const getRecipeById = async () => {
        const response = await axios.get(`http://localhost:5500/api/get-recipe-by-id/${id}`);
        console.log(response.data.data[0].name);
        setName(response.data.data[0].name);
        setIngredients(response.data.data[0].ingredients);
        setPreparation(response.data.data[0].preparation);
    }
 
    return (
        <div>
            <h1>Modifiez Votre Recette</h1>

            <form className="card" onSubmit={ updateRecipe }>
                <h2>
                    <input 
                        className="name"
                        type="text"
                        placeholder="Nom"
                        value={ name }
                        onChange={ (e) => setName(e.target.value) }
                    />
                </h2>
 
                <h2>                    
                    <input 
                        className="ingredient"
                        type="text"
                        placeholder="Ingrédients"
                        value={ ingredients }
                        onChange={ (e) => setIngredients(e.target.value) }
                    />
                </h2>

                <p>
                    <input 
                        className="preparation"
                        type="text"
                        placeholder="Préparation"
                        value={ preparation }
                        onChange={ (e) => setPreparation(e.target.value) }
                    />
                </p>
 
               
                    <button>Modifier</button>
                
            </form>
        </div>
    )
       
}
 
export default EditRecipe
/*
 return (
        <div>
            <h1>Modifie Ta Recette</h1>

            <form className="card" onSubmit={ updateRecipe }>

                <div className="field">
                    <label className="label">Nom : </label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Nom"
                        value={ name }
                        onChange={ (e) => setName(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Ingrédients :</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Ingrédients"
                        value={ ingredients }
                        onChange={ (e) => setIngredients(e.target.value) }
                    />
                </div>
                <div className="field">
                    <label className="label">Préparation :</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Préparation"
                        value={ preparation }
                        onChange={ (e) => setPreparation(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <button>Modifier</button>
                </div>
            </form>
        </div>
    )
    */