//App.js Modifier 23 Sept 2022

import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import AddRecipe from "./components/AddRecipe";
import Recipes from "./components/Recipes";
import RecipeAff from "./components/RecipeAff";
import EditRecipe from "./components/EditRecipe";
import NavBar from "./components/NavBar";
import CategoryList from "./components/CategoryList";
import SideBarMenu from "./components/SidebarMenu";


function App() {
  return (
    <BrowserRouter>
    <React.Fragment>
      <header className="header-container">
        <NavBar />
        <SideBarMenu />
      </header>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/edit-recipe" element={<EditRecipe />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipe-aff" element={<RecipeAff />} />
        <Route path="/category-meat" element={<CategoryList />} />
        <Route path="/category-chicken" element={<CategoryList />} />
        <Route path="/category-fish" element={<CategoryList />} />
        <Route path="/category-deserts" element={<CategoryList />} />
        <Route path="/category-vegan" element={<CategoryList />} />
      </Routes>
    </React.Fragment>
    </BrowserRouter>
  );
}
export default App;
