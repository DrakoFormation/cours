# Exercices PHP (partie 2)

Pré-requis :
- avoir un environnement de travail ([Wamp](https://www.wampserver.com/) / [Xampp](https://www.apachefriends.org/fr/index.html) / [Mamp](https://www.mamp.info/en/downloads/) ou équivalent)
- avoir des bases de PHP

Correction :

- En vidéo, tout le long des exercices (après l'énoncé correspondant)
- Dans le code, sur [le repository dédié aux corrections sur GitHub](https://github.com/Dreeckan/beanies/pulls?q=is%3Apr). 

## 6. Séparation des fichiers

Nous allons maintenant séparer notre code en plusieurs éléments, à thème. L'idée est ici d'avoir des fichiers plus spécialisés et rapides à retrouver.

- Séparer le code en plusieurs fichiers php :
    - Un pour les variables
    - Un autre pour les fonctions
    - Un pour le HTML
- Appeler ces fichiers dans le HTML ([utiliser `include` pour appeler les différents fichiers](https://www.php.net/manual/fr/function.include.php) où vous le souhaitez)

### Correction  

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/74ac07352bd2423f8a40a5ff41139e85" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## 7. Utiliser git

- Créer un projet sur Github ou Gitlab (invitez-moi sur le projet, mon pseudo est `Dreeckan`)
- Créer votre fichier `.gitignore` et y ajouter 2 lignes : `.idea` et `.vscode` (ce sont des fichiers liés aux IDE, il vaut mieux les ignorer au plus tôt)
- Créer un premier commit, si ça n'est pas déjà fait
- Pusher votre code sur Github ou Gitlab
- Partager le lien (en privé sur Discord ou en m'invitant sur le projet)
- Créer une branche `ajout-layout` pour l'exercice suivant

### Correction 

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/08d6137827b64decaca6b9cc6dc5f92e" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## 8. Mise en place d'un layout

Ce que j'appelle layout : nous allons découper notre HTML pour en extraire les éléments communs (balises `<html>`, `<head>`, `<body>`, etc.) et les mettre dans des fichiers qui vont être inclus dans toutes nos pages.

- Créer un dossier `includes` et y ajouter les fichiers contenant les variables et les fonctions
- Dans ce dossier, y ajouter un fichier `header.php` et un fichier `footer.php`

## 9. Header

L'idée est ici de regrouper la plus grande partie du code commun, pour l'inclure dans toutes nos pages (et donc, réduire le nombre de fois où on a besoin de l'écrire).

- Dans `header.php`, déplacer les includes des fichiers de variables et de fonctions (remplacer les includes par des `require_once` et rechercher ce que fait cette fonction)
- Ajouter le html qui va être commun à toutes nos pages (balises `<html>`, `<head>`, `<body>`, etc.)
- Inclure le fichier `header.php` dans la page de liste des bonnets

## 10. Footer

- Dans `footer.php`, ajouter le html commun à toutes nos pages se trouvant après le php
- Inclure ce fichier `footer.php` dans la page de liste

### Correction des exercices 8, 9 et 10

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/d5f13adba7f349a983518db6eaa43d1b" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## 11. Création d'une page d'accueil

L'idée est ici de créer une seconde page `list.php` qui va contenir notre tableau précédent, et de transformer `index.php` en une page d'accueil avec une présentation plus accrocheuse.

- Renommer le fichier `index.php` en `list.php`. On ne change rien dans ce fichier pour le moment, nous allons créer une nouvelle page d'accueil, séparée.
- Créer un nouveau fichier `index.php` et y appeler nos header et footer avec `include` ou `include_once` (pour inclure les éléments communs à toutes les pages)
- Inclure le style et le js de Bootstrap, [disponible ici](https://getbootstrap.com/docs/5.1/getting-started/download/#cdn-via-jsdelivr/)
- Inclure sur cette page une liste des 3 premiers bonnets de notre liste
- Leur trouver une image pour les rendre plus jolis (je laisse ça à votre jugement ;)) et ajouter le lien de cette image dans les données
- Utiliser [les cards de Bootstrap](https://getbootstrap.com/docs/5.1/components/card/) pour les mettre en forme

### Correction

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/53f34956b14c48c48cb0dcd7e5de0e40" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## 12. Lier nos pages

Maintenant que nous avons deux pages, nous voulons naviguer de l'une à l'autre.

- Dans la page d'accueil, sous les 3 produits, ajouter un lien vers `list.php` (`Voir tous les produits`)
- Le mettre en forme avec Bootstrap (en lui appliquant la classe des boutons par exemple)

Correction en vidéo :

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/2fd04130c40a48fea814ad382fcb0971" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

### Faire relire votre code (Pull Request)

- Créer une Pull Request (ou Merge Request si vous êtes sur Gitlab)
- Mettez-vous en groupe (si ce n'est déjà fait) et invitez-vous sur vos projets respectifs
- Relisez le code des autres et faites-leur vos retours sur leur code

### Correction

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/3d1a8241587b4259bd1fd9ed8c8936a6" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## 13. Mettre en place un menu

À partir de cet exercice, nous allons commencer à manipuler les [variables superglobales](01-bases.md#interagir-avec-l-utilisateur). Dans un premier temps, facilitons la navigation de l'utilisateur.

- Créer une nouvelle branche (git) (nommée par exemple `ajout-session`) et y travailler
- Ajouter un menu en haut de toutes les pages
- Mettre un lien vers la page `index.php` et un autre vers `list.php`
- Le mettre en forme avec Bootstrap (composant [navbar](https://getbootstrap.com/docs/5.1/components/navbar/) par exemple) 

Correction vidéo :

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/e4796b31a58947d48c6d1ab3e08f4ac7" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
