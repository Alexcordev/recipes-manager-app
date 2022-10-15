import React, { useState, useEffect } from "react";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { Link, Outlet, useNavigate } from "react-router-dom";

import axios from "axios";

import "./sidebar.css";
import "../App.css";


const SideBarMenu = (props) => {    
    const navigate = useNavigate();    
  return (
      <div className="sidebar">
        <nav className="sidebar-nav">        
          <h3>
            CAT&Eacute;GORIES
          </h3>
          <ul className="sidebar-list">
            <li>
            <button className="button-edit" onClick={() => navigate("/category-meat", { state: { categorie: "Viandes" } })}>Viandes</button>
            </li>
            <li>
            <button className="button-edit" onClick={() => navigate("/category-chicken", { state: { categorie: "Volailles" } })}>Volailles</button>
            </li>
            <li>
            <button className="button-edit" onClick={() => navigate("/category-fish", { state: { categorie: "Poissons" } })}>Poissons</button>
            </li>
            <li>
            <button className="button-edit" onClick={() => navigate("/category-deserts", { state: { categorie: "Desserts" } })}>Desserts</button>
            </li>
            <li>
            <button className="button-edit" onClick={() => navigate("/category-vegan", { state: { categorie: "Végé" } })}>Végé</button>
            </li>
          </ul>
        </nav>
      </div>
    
  );
};
// <Outlet /> dans 28
export default SideBarMenu;