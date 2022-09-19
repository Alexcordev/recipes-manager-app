### Utiliser les branches

créer une branche

        { git branch nom-de-la-branche }

  

changer de branche

        { git checkout nom-de-la-branche }

Lorsque tu as terminé les modifications dans ta branche et que tout fonctionne comme tu le souhaites tu fais la commande

        { git add -A  }

ensuite tu fais la commande  

        { git commit -m "message"  }

pour sélectionner la branche dans laquelle tu veux faire la fusion 

        { git switch nom-de-la-branche }

pour fusionner ta branche dans la branche main

        { git merge main }

tout transférer dans le répertoire principal (le mien)

        { git push -u origin main }

pour supprimer une branche

        { git branch -d nom-de-la-branche }
