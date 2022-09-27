// NavBar.js modifié le 23 sept 2022
//***********************************************************************************
import React from "react";
import { Link, Outlet } from "react-router-dom";

import "../App.css";

const NavBar = (props) => {
  return (
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
    
  );
};
// <Outlet /> dans 28
export default NavBar;
