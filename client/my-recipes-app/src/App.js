//import React, { useState } from 'react'; useState non utilisé
//import { Routes, Route, Link } from "react-router-dom"; Link non utilisé
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import AddRecipe from "./components/AddRecipe";
import Recipes from "./components/Recipes";
import EditRecipe from "./components/EditRecipe";
import NavBar from "./components/NavBar";
//import DeleteRecipe from './components/DeleteRecipe';

function App() {
  return (
    <BrowserRouter>
    <React.Fragment>
      <header className="header-container">
        <NavBar />
      </header>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/edit-recipe" element={<EditRecipe />} />
      </Routes>
    </React.Fragment>
    </BrowserRouter>
  );
}
export default App;
