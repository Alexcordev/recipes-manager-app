// CloneAlexRecettes
// Déclaration des routes du MySQL vers destination voulue
//**************************************************************** */
const express = require("express");
const router = express.Router();
const app = express();

const mysql = require("mysql");
const bodyParser = require('body-parser');

require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

 const db = mysql.createConnection({
 host: process.env.DB_HOST,
 user: process.env.DB_USERNAME,
 password : process.env.DB_PASSWORD,
 database : process.env.DB_DBNAME,

});


// Route Pour:Liste des Recettes existante s'afficherons dans la page localhost:3000/recipes
//****************************************************************************** */ 
router.get("/recipesDb", (req, res) => {
  var sql='SELECT * FROM recipes';
  db.query(sql, function (err, data, fields) {
  console.log(data);
  res.send(data);
  }); 
});

// Route Pour:Affichage d'un Recette existante dans la page localhost:3000/recipe-aff
//****************************************************************************** */ 
/*
router.get("/AffRecipeDb/:id", (req, res) => {

  var sql=`SELECT * FROM recipes WHERE id = ${id}`;
 */

  router.get("/affRecipeDb", (req, res) => {
    var sql='SELECT * FROM recipes';
    db.query(sql, function (err, data, fields) {
    console.log(data);
    res.send(data);
  }); 
});

  // Route Pour: Ajout des Recettes qui seront affichées dans la page localhost:3000/add-recip
//******************************************************************************** */
router.post('/addRecipeDb', function(req, res){
  //Récupération des données depuis chacun des champs du formulaire html 
  //et les insert dans MySQL
  var name=req.body.name;
  var ingredients = req.body.ingredients;
  var preparation = req.body.preparation;
  let insertQuery ="insert into recipes SET ?"
  const recipe={name, ingredients, preparation}

  db.query(insertQuery,recipe, (err, results) => {
   if(err) {
    console.log("insert error");
    res.send(err)
   } else {
     res.send({ error: false, data: results, message: 'recipe added successfully' });
   }
  });
});
// Route Pour: Delete recipe
//****************************************************** */
router.get('/deleteRecipeDb/:id', function(req, res, next) {
  var id= req.params.id;

  var sql = 'DELETE FROM recipes WHERE id = ?';

  db.query(sql, [id], function (err, data) {
   if (err) throw err;
    console.log(id);
    res.send(data.affectedRows + " record(s) deleted");
 });

});

// Edit (Modifier) des Recettes qui seront affichées dans la page localhost:3000/edit-recipe
//**************************************************************************************** */
//Cherche la recette à modifier
    router.get('/get-recipe-by-id/:id', function(req, res){  
        //Récupération des données depuis chacun des champs du formulaire html 
        //et les remplace dans MySQL
         var id= req.params.id;
         let recipeQuery = `SELECT * FROM recipes WHERE id = ${id}`;
      
        // const recipe={name, ingredients, preparation} // not used
       
        db.query(recipeQuery,(err, results) => {
          if(err) {
            console.log("recipe not found");
            res.send(err)
          } else {
             res.send({ error: false, data: results, message: 'recipe found' });
          }
       });
      });

      router.get('/get-recipes-by-category/:categorie', function(req, res){  
        //Récupération des données depuis chacun des champs du formulaire html 
        //et les remplace dans MySQL
         var category= req.params.categorie.toLowerCase();
         console.log(category);
         /*let recipeQuery = `SELECT * FROM recipes WHERE category = ${category}`;*/
         /*let recipeQuery = `SELECT * FROM recipes WHERE category = ${category}`;*/
         let recipeQuery = `SELECT * FROM recipes WHERE category = ?`;
        // const recipe={name, ingredients, preparation} // not used
       
        db.query(recipeQuery, [category], (err, results) => {
          if(err) {
            console.log("recipe not found");
            res.send(err)
          } else {
             res.send({ error: false, data: results, message: 'recipe found' });
          }
       });
      });
      

//Enregistre les modification dans la Base de donnée
  router.patch('/editRecipeDb/:id', function(req, res){  
//Récupération des données depuis chacun des champs du formulaire html 
//et les remplace dans MySQL
   var id= req.params.id;
   var name=req.body.name;
   var ingredients = req.body.ingredients; 
   var preparation = req.body.preparation;
   let updateQuery = `UPDATE recipes SET ? WHERE id = ${id}`;
   const recipe={name, ingredients, preparation}; 

   db.query(updateQuery, recipe,(err, results) => {
    if(err) {
      console.log("insert error");
      res.send(err)
    } else {
       res.send('recipe modified successfully');
    }
 });
});

module.exports = router;




























































