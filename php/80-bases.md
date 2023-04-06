# Exercices - Bases

Pré-requis :
- avoir un environnement de travail ([Wamp](https://www.wampserver.com/) / [Xampp](https://www.apachefriends.org/fr/index.html) / [Mamp](https://www.mamp.info/en/downloads/) ou équivalent)
- avoir des bases de PHP

Correction :

- En vidéo, tout le long des exercices (après l'énoncé correspondant)
- Dans le code, sur [le repository dédié aux corrections sur GitHub](https://github.com/Dreeckan/beanies/pulls?q=is%3Apr). 

## 1. Utilisation des tableaux

Commençons par afficher une première page. Pour cela, il nous faut quelques données de base et une structure HTML basique :

- Créer une page html (balise `<html>`, `<body>`) dans un fichier PHP (`index.php` par exemple)
- y créer un tableau PHP contenant ces produits :
    - Bonnet en laine
    - Bonnet en laine bio
    - Bonnet en laine et cachemire
    - Bonnet arc-en-ciel
- afficher ces produits dans le html en utilisant une boucle (`foreach` conseillé), dans une balise HTML `<table>`

### Correction 

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/718d5d6b0813452ebb37b67e43ea5c18" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## 2. Tableaux imbriqués

Nous voulons maintenant un peu plus d'informations sur nos produits. Commençons par un prix et une description.

- Complexifions les données et transformons nos données en tableaux :
    - Bonnet en laine : 10€
    - Bonnet en laine bio : 14€
    - Bonnet en laine et cachemire : 20€
    - Bonnet arc-en-ciel : 12€
- Tous les produits vont également avoir la même description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a leo diam. Quisque lorem orci, accumsan quis dolor sed, gravida.`
- Mettre à jour l'affichage en conséquence

### Correction 

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/bb4fc2d4018d4e66983e9340607d2e52" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## 3. Conditions

On va faire ressortir visuellement les prix de nos produits, et encore plus ceux qui ne sont pas cher !

- Si un prix est inférieur ou égal à 12€, afficher le prix en vert, sinon l'afficher en bleu.

### Correction 

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/976a00bc95df4564a49c8df2d1d6b411" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## 4. Fonctions

Une pensée pour les professionnels qui ont besoin de se couvrir la tête ! Pour eux, il faudrait afficher les prix sans TVA.

- Nos prix étaient ici TTC (incluaient la TVA), nous allons faire une fonction calculant le montant hors taxes d'un produit.
- Afficher les prix HT dans une nouvelle colonne avant celle des prix TTC
- La TVA est de 20% sur les bonnets

### Correction 

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/080ae051442540df857dc21b677e4e04" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## 5. Manipulation des chaines de caractère et des variables

Factorisons un peu notre code, en réduisant l'appel d'une ligne du tableau à l'appel d'une fonction.

- Faire une fonction qui affiche un produit (va reprendre l'affichage d'une ligne du tableau)
- Appeler cette fonction dans la boucle

### Correction 

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/ed056411f93b411f890b0d603f4131fa" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
