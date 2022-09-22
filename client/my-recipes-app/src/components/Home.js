import React from "react";

import '../App.css';

const Home = (props) => {
  return (
    <div className="container">
      <h1>Tableau de bord</h1>
      <h3>Application pour Gestion des recettes</h3>
      <ul>
        <li>Pour créer une recette: click sur Ajouter</li>
        <li>Pour visualiser, modifier ou supprimer une recette: click sur Affichage</li>
      </ul>
    </div>
  );
};

export default Home;
