import React from "react";
import { Link, Outlet } from "react-router-dom";

import '../App.css';

const NavBar = (props) => {
  return (
    <header className="header-container">
    <nav>
      <ul className="align-horizontally">
        <li>
          <Link className="list-style" to="/">Accueil</Link>
        </li>
        <li>
          <Link className="list-style" to="/add-recipe">Ajout</Link>
        </li>
        <li>
          <Link className="list-style" to="/recipes">Affichage</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
    </header>

  );
};
//
export default NavBar;
