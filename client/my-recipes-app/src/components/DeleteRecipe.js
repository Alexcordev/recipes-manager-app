// DeleteRecipe.js    Modifier 23 Sept 2022

// ****** La Reponse de suppression (lors du Click Bouton Supp dans recipe.js)
//est envoyé par MySQL via api/delete-recipe
// ici async est utile car je demande 2 reponses dc j ai besoin de les synchroniser

async function deleteRecipe(id) {
  
  const response = await fetch(`http://localhost:5500/api/deleteRecipeDb/${id}`);
  if (response.status === 200) {
    alert("Recette supprimée avec succès");
    console.log(response);
  }
  return response;
}
export default deleteRecipe;
