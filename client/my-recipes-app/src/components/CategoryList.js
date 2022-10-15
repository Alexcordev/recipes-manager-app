import React, { useState, useEffect } from "react";
import CategoryItem from "./CategoryItem";

import { useLocation } from 'react-router-dom';
import axios from 'axios';

import '../App.css';

// ******* Map la liste des recettes
const CategoryList = (props) => {
    
    const [category, setCategory] = useState([]);
    const { state } = useLocation();
    const { categorie } = state; // Read values passed on state
    useEffect(() => {
        getCategorie();
      }, []);
const getCategorie = async (e) => {
    //console.log(e.target.childNodes[0].data);
    console.log(categorie);
    const response = await axios.get(`http://localhost:5500/api/get-recipes-by-category/${categorie}`)
    .then((res) => {
        console.log(res);
        setCategory(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
}
    return (
      <div className="recipesList-wrap">
        {category.map((categ) => {
          return (
            <CategoryItem
              key={categ.id}
              name={categ.name}
              ingredients={categ.ingredients}
              preparation={categ.preparation}
              category={categ.category}
            />
          );
        })}
      </div>
    );
  };

  export default CategoryList;