# Exercices PHP (partie 6)

Pré-requis :
- avoir un environnement de travail ([Wamp](https://www.wampserver.com/) / [Xampp](https://www.apachefriends.org/fr/index.html) / [Mamp](https://www.mamp.info/en/downloads/) ou équivalent)
- avoir des bases de PHP

Correction :

- En vidéo, tout le long des exercices (après l'énoncé correspondant)
- Dans le code, sur [le repository dédié aux corrections sur GitHub](https://github.com/Dreeckan/beanies/pulls?q=is%3Apr). 
 
## 26. Créer une base de données

- Ouvrir [PhpMyAdmin](http://localhost/phpmyadmin/)
- Y créer une base de données `exo_beanies`
- Créer des tables pour les objets 
  - `Contact` (nommer la table `contact`)
  - `Beanie` (nommer la table `beanie`)
- Créer un fichier de connexion à la BdD `includes/config.inc.php` et faire en sorte d'avoir une connexion fonctionnelle dans toutes vos pages.
- Insérer des données dans la table `beanie` à l'aide de **l'une des deux méthodes** suivantes :
  - dans PhpMyAdmin, ajouter des données dans la table `beanie` (avec les valeurs de votre fichier `variables.php` par exemple)
  - écrire un script PHP `includes/fixtures.php` insérant les données
  
### Correction

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/83cf03d0bd08402db4eadcc00e3cc8ab" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## 27. Formulaire de contact, en BdD

- Modifier votre page de contact pour insérer les données du formulaire dans la table `contact`
  - N'insérer les données **que** si aucune erreur n'est remontée
  
### Correction

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/c9e3d9aa6dc04ae1800c6292268bdeaf" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## 28. Utiliser les données de la BdD

Choisissez **l'une des deux** méthodes suivantes pour remplir nos bonnets depuis la BdD :
  - Créer une classe `BeanieFactory` dans `classes/Factory/BeanieFactory.php` qui va avoir une méthode `create()` 
    - ayant pour paramètre un tableau (une ligne récupérée dans la BdD) 
    - renvoyant un objet `Beanie` contenant les données venues de la table
  - Utilisez le flag `FETCH_CLASS` de PDO pour remplir les objets à l'aide de la BdD
- Modifier vos pages pour récupérer les données depuis la table `beanie`, plutôt qu'une variable
  - Adapter le code des différentes pages pour utiliser la BdD plutôt que le tableau (fixe), utilisé jusqu'à présent

### Pull Request

- Créez une Pull Request
- Invitez quelqu'un.e sur votre projet
- Faites vous inviter par cette personne également
- Relisez le code et faites vos retours (vérifiez que le code valide bien les normes PSR-12 **et** PSR-4, par exemple)
- Approuvez (ou non) sa PR
- Une fois votre PR validée par un.e pair.e, vous pouvez la fusionner (merge)

### Correction

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/f4566ed9b7944d3aac0233bab24cb9c9" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>


## 29. MVC et namespaces (:warning: difficile)

Notre site ne suit pas parfaitement [le modèle MVC](40-mvc.md). Il nous faudrait améliorer ça et re-structurer un peu les fichiers et leur organisation.
Ce que nous voulons faire :
- Renommer le dossier `class` en `src` et y créer **au moins** 3 sous-dossiers : `Model`, `View` et `Controller`
- Déplacer les vues (pages) dans `View`
- Ranger les classes que vous aviez créées dans `Model` ou dans un autre dossier (par exemple, j'ai un dossier `Service` pour certaines classes)
- Créer un objet Controller par page et y déplacer la logique (calculs PHP actuellement dans les pages)
- Faire en sorte que le front controller (`index.php`) appelle le bon contrôleur en fonction de l'url

:warning: Pensez bien à mettre à jour les namespaces de vos classes et **tous** les appels à ces classes.

### Correction

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/cf40ff999add49d49ad1d0e3c30ff228" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/a6c18a2f40594140845671e73f2223a5" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/2bd430e7ee934262a7b1fe7335a93933" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## Révisions

Pour réviser tous ces points et les travailler, vous pouvez [vous entrainer avec ces exercices de révision](https://github.com/Dreeckan/exercices-php/blob/main/revisions.md).
