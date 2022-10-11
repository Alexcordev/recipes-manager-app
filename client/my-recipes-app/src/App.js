//App.js Modifier 23 Sept 2022

import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import AddRecipe from "./components/AddRecipe";
import Recipes from "./components/Recipes";
import AffRecipe from "./components/AffRecipe";
import EditRecipe from "./components/EditRecipe";
import NavBar from "./components/NavBar";


function App() {
  return (
    <BrowserRouter>
    <React.Fragment>
      <header>
        <NavBar />
      </header>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/aff-recipe" element={<AffRecipe />} />
        <Route path="/edit-recipe" element={<EditRecipe />} />
      </Routes>
    </React.Fragment>
    </BrowserRouter>
  );
}
export default App;
