# Exercices PHP (partie 5)

Pré-requis :
- avoir un environnement de travail ([Wamp](https://www.wampserver.com/) / [Xampp](https://www.apachefriends.org/fr/index.html) / [Mamp](https://www.mamp.info/en/downloads/) ou équivalent)
- avoir des bases de PHP

Correction :

- En vidéo, tout le long des exercices (après l'énoncé correspondant)
- Dans le code, sur [le repository dédié aux corrections sur GitHub](https://github.com/Dreeckan/beanies/pulls?q=is%3Apr). 

## 18. Créer un front controller

Le but du front controller est de réduire (encore) les répétitions de code, en gérant **tous** les éléments constants (inclusions, démarrage de session, etc.).

- Nous allons maintenant utiliser notre fichier `index.php` en tant qu'unique script PHP appelé. C'est-à-dire que nous n'appellerons plus `list.php` (et les autres pages) directement, mais en passant par elle. (en appelant `index.php?page=list` ou `?page=list`)
- Renommer le fichier `index.php` en `home.php` et créer un nouveau fichier `index.php`
- Ranger les fichiers de pages qu'on a jusqu'à présent (list, login, home, etc.) dans un dossier `pages`
- Dans `index.php`, nous allons récupérer un paramètre `GET`, nommé `page`, qui contiendra la page à charger (page d'accueil, liste des produits, panier, etc.)
- Mettre à jour les autres pages en conséquence pour réduire autant que possible le code des pages
- Ajouter la temporisation de sortie pour permettre les éventuelles redirections

```php
<?php
ob_start();
//
// ... contenu du script ...
//
ob_end_flush();
```

Correction de l'exercice 18 :

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/0aef072ce1a547f4a7dc2e49ca7dbf92" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## 19. Ajouter des éléments au panier

Nous avons des produits, il ne nous reste plus qu'à les acheter ! (faire semblant de les acheter, plutôt)

- Sur la page de liste (`list.php`), ajouter un bouton "Ajouter au panier" (on ajoute un seul élément à la fois dans le panier)
- Gérer l'ajout au panier d'un élément (passer un identifiant (à ajouter dans la liste des produits) qui sera récupéré avec `$_GET`)
- Les éléments doivent être présents dans la session

### Exemple de format (non obligatoire) de `$_SESSION['cart']`

```php
[
    666 => 2, // 2 éléments avec l'id 666 sont dans le panier
    32 => 1, // 1 élément avec l'id 32 est présent dans le panier
];
```

## 20. Afficher les éléments du panier

- Créer une page `cart.php` (si ça n'est pas déjà fait) dans laquelle vous allez afficher le panier
- Ajouter des boutons (liens) pour ajouter ou supprimer des éléments déjà présents
- Calculer et afficher le prix pour chaque ligne (`$price * $quantity`)
- Calculer et afficher le prix total du panier
- Ajouter un bouton pour vider le panier
- Le panier doit être disponible même si l'utilisateur n'est pas connecté

### Créer une PR (Pull Request)

- Créez une Pull Request
- Invitez quelqu'un.e sur votre projet
- Faites vous inviter par cette personne également
- Relisez le code et faites vos retours (vérifiez que le code valide bien les normes PSR-1 **et** PSR-12, par exemple)
- Approuvez (ou non) sa PR
- Une fois votre PR validée par un.e pair.e, vous pouvez la fusionner (merge) 

### Correction des exercices 19 et 20

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/2482646b145c4f009f97bea3058e7bd2" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## 21. Ajouter un formulaire de contact

- Trois champs :
  - Sujet (champ de type text)
  - Email (pour recontacter la personne) (champ de type email)
  - Message (champ de type textarea)
- Contraintes (valider que les champs correspondent à ces critères, tant en html que PHP) :
  - Sujet non vide (Attention au cas `' '`)
  - Email valide (non vide et de la forme `test@test.test`)
  - Message non vide (Attention au cas `' '`)

### Indices

- Il existe une fonction PHP qui va vérifier la validité d'une variable (dont un email)
- Il faut passer les données en POST dans votre formulaire
- Vous pouvez ajouter une validation au niveau du HTML, mais il faudra quand même faire la validation PHP (il est facile de contourner la validation HTML) 

### Pull Request

- Créez une Pull Request
- Invitez quelqu'un.e sur votre projet
- Faites vous inviter par cette personne également
- Relisez le code et faites vos retours (vérifiez que le code valide bien les normes PSR-1 **et** PSR-12, par exemple)
- Approuvez (ou non) sa PR
- Une fois votre PR validée par un.e pair.e, vous pouvez la fusionner (merge)

### Correction

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/bdb0d2fbd02c4a78900795d9a8f6ce8b" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

