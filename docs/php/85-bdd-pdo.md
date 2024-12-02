# Exercices - BdD avec PDO

[[toc]]

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

<iframe class="yt-video" src="https://www.youtube.com/embed/8rv2uU_YaSQ" title="Exercice 1" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen></iframe>

## 27. Formulaire de contact, en BdD

- Modifier votre page de contact pour insérer les données du formulaire dans la table `contact`
  - N'insérer les données **que** si aucune erreur n'est remontée
  
### Correction

<iframe class="yt-video" src="https://www.youtube.com/embed/wO0-9wz_Fqo" title="Exercice 1" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen></iframe>

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

<iframe class="yt-video" src="https://www.youtube.com/embed/e-_-ni-t1s0" title="Exercice 1" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen></iframe>


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

<iframe class="yt-video" src="https://www.youtube.com/embed/L72w3ncAHRE" title="Exercice 1" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen></iframe>

<iframe class="yt-video" src="https://www.youtube.com/embed/oS18WpW99eM" title="Exercice 1" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen></iframe>

<iframe class="yt-video" src="https://www.youtube.com/embed/Oq7ELSBr6V0" title="Exercice 1" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen></iframe>

## Révisions

Pour réviser tous ces points et les travailler, vous pouvez [vous entrainer avec ces exercices de révision](https://github.com/Dreeckan/exercices-php/blob/main/revisions.md).
