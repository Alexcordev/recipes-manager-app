// NavBar.js modifié le 23 sept 2022
//***********************************************************************************
import React, { useState, useEffect } from "react";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { Link, Outlet } from "react-router-dom";

import axios from 'axios';

import "../App.css";
import "./sidebar.css";

const NavBar = (props) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetchRecipes();
  }, []);
  const fetchRecipes = () => {
    axios.get('http://localhost:5500/api/recipesDb')
      .then((res) => {
        setRecipes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
};

const handleOnSearch = (string, results) => {
  // onSearch will have as the first callback parameter
  // the string searched and for the second the results
  if(string === results)
    console.log(string, results)
}

const handleOnSelect = (item) => {
  // the item selected
  console.log(item)
}

const handleOnFocus = () => {
  console.log('Focused')
}

  return (
    <>
      <div className="header-container">
        <nav className="main-nav">
          <a className="header-container-brand" href="index.html">
            F&A
          </a>
          <ul className="nav-items">
            <li>
              <Link className="nav-item--cta" to="/">
                Accueil
              </Link>
            </li>
            <li>
              <Link className="nav-item" to="/add-recipe">
                Ajout
              </Link>
            </li>
            <li>
              <Link className="nav-item" to="/recipes">
                Affichage
              </Link>
            </li>
          </ul>
          
        </nav>
        <Outlet />
        
      </div>
    <div className="sidebar-search">
    <ReactSearchAutocomplete 
       items={recipes}
       resultStringKeyName="name"
       placeholder="Recherche par ingrédient"
       fuseOptions={{ keys: ["name", "ingredients", "preparation"] }}
       onSearch={handleOnSearch}
       onSelect={handleOnSelect}
       onFocus={handleOnFocus}
       autoFocus
    />
    </div>
    </>
  );
};
// <Outlet /> dans 28
export default NavBar;
/*
 <li><Link className="nav-item" to="/add-recipe">Ajout</Link></li>
 */
