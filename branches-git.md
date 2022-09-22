### Utiliser les branches

créer une branche

        { git branch nom-de-la-branche }

  

changer de branche

        { git checkout nom-de-la-branche }

Lorsque tu as terminé les modifications dans ta branche et que tout fonctionne comme tu le souhaites tu fais les commande suivantes:

        1- git add -A  

ensuite tu fais la commande  

        2- git commit -m "message"  

pour sélectionner la branche dans laquelle tu veux faire la fusion 

        3- git switch nom-de-la-branche 

pour fusionner ta branche dans la branche main

        4- git merge main 

Refaire les étapes 1 à 4 pour chacune des branches à transferer

une fois fini on peut

tout transférer dans le répertoire principal (celui d'Alex) d'un seul coup à l'aide de l'étape 5

        5- git push -u origin main 

Infos gémérales:
*********************************

* pour supprimer une branche:
        git branch -d nom-de-la-branche

* Pour cloner l appli d'alex:
ecrire ceci dans le terminal a la place qu'on veut mettre le clone:
git clone https://github.com/Alexcordev/recipes-manager-app.git 

* Acces au github Alex: taper dans google l'adresse:
https://github.com/Alexcordev/recipes-manager-app
