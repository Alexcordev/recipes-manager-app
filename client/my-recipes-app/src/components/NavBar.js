// NavBar.js modifié le 23 sept 2022
//***********************************************************************************
import React from "react";
import { Link, Outlet } from "react-router-dom";

import '../App.css';

const NavBar = (props) => {
  return (
  
    <header className="header-container">
     
      <div>
        <a className="header-container-brand" href="index.html">F&A</a>
      </div> 
      <nav className="main-nav">
        <ul className="nav-items">
          
          <li>
            <Link className="nav-item--cta" to="/">Accueil</Link>
          </li>
         
          <li>
            <Link className="nav-item" to="/recipes" >Affichage</Link>
          </li>
       
        </ul>
      </nav>
      <Outlet /> 
    </header>

  );
};
// <Outlet /> dans 28
export default NavBar;
/*
 <li><Link className="nav-item" to="/add-recipe">Ajout</Link></li>
 */
