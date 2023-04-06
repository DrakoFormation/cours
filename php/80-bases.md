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

<iframe class="yt-video" src="https://www.youtube.com/embed/b_yjqBY0p60" title="Exercice 1" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen></iframe>

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

<iframe class="yt-video" src="https://www.youtube.com/embed/VlCqX0J7Opo" title="Exercice 1" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen></iframe>

## 3. Conditions

On va faire ressortir visuellement les prix de nos produits, et encore plus ceux qui ne sont pas chers !

- Si un prix est inférieur ou égal à 12€, afficher le prix en vert, sinon l'afficher en bleu.

### Correction 

<iframe class="yt-video" src="https://www.youtube.com/embed/g-Unz6AniCo" title="Exercice 1" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen></iframe>

## 4. Fonctions

Une pensée pour les professionnels qui ont besoin de se couvrir la tête ! Pour eux, il faudrait afficher les prix sans TVA.

- Nos prix étaient ici TTC (incluaient la TVA), nous allons faire une fonction calculant le montant hors taxes d'un produit.
- Afficher les prix HT dans une nouvelle colonne avant celle des prix TTC
- La TVA est de 20% sur les bonnets

### Correction 

<iframe class="yt-video" src="https://www.youtube.com/embed/G2VFNOS29cQ" title="Exercice 1" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen></iframe>

## 5. Manipulation des chaines de caractère et des variables

Factorisons un peu notre code, en réduisant l'appel d'une ligne du tableau à l'appel d'une fonction.

- Faire une fonction qui affiche un produit (va reprendre l'affichage d'une ligne du tableau)
- Appeler cette fonction dans la boucle

### Correction 

<iframe class="yt-video" src="https://www.youtube.com/embed/FBX5-V6mphc" title="Exercice 1" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen></iframe>
