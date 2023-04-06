# Exercices PHP (partie 3)

Pré-requis :
- avoir un environnement de travail ([Wamp](https://www.wampserver.com/) / [Xampp](https://www.apachefriends.org/fr/index.html) / [Mamp](https://www.mamp.info/en/downloads/) ou équivalent)
- avoir des bases de PHP

Correction :

- En vidéo, tout le long des exercices (après l'énoncé correspondant)
- Dans le code, sur [le repository dédié aux corrections sur GitHub](https://github.com/Dreeckan/beanies/pulls?q=is%3Apr). 

## 14. Créer une page de connexion

Créons une nouvelle page de connexion, avec un formulaire. Il s'agit maintenant de gérer le formulaire, en récupérant les données `$_POST` lors de sa soumission, et nous les retiendront en session plus tard.

- Créer une page `login.php` (à la racine du projet, avec les autres pages)
- Y ajouter un formulaire de connexion (un champ login, un champ password et un bouton de validation)
- Le mettre en forme avec Bootstrap
- Afficher le login de l'utilisateur dans le menu à la soumission du formulaire
- Cette valeur (`$_POST['login']`) pouvant ne pas exister, bien s'assurer de son existence avant affichage

### Correction des exercices 13 et 14

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/4d59234c41014fb59cfed2dfef982aba" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## 15. Mise en place de la session

Mettons en route la session et ajoutons-y le login de l'utilisateur lors de sa connexion.

- Ajouter le `session_start()` à l'endroit adéquat
- Lors de la connexion de l'utilisateur, mettre son login en session
- Afficher ce login depuis la session, s'il est disponible

## 16. Créer une page de déconnexion

Maintenant que l'on sait créer la session, voyons comment la détruire.

- Créer une page `logout.php`
- Cette page ne va contenir que quelques lignes
- Utiliser la fonction `session_destroy()` pour détruire les données en session
- une fois la fonction appelée (avec succès ;) ), utiliser la fonction `header()` pour rediriger vers la page `index.php` (et donc, pas besoin d'appeler quoique ce soit d'autre)
```php
// Cette fonction a une utilisation assez particulière,
// Voici l'écriture pour rediriger vers la page index.php
header("Location: index.php");
```

### Astuces

Si vous souhaitez afficher un message alors que vous avez une redirection avec `header()`, vous pouvez passer un paramètre `$_GET` :

```php
// Dans logout.php :
// On transmet un paramètre GET pour noter que l'utilisateur est déconnecté
header("Location: index.php?disconnected=1");

// Dans header.php (par exemple) :
// On récupère le paramètre, s'il existe, et on affiche un message
if (!empty($_GET['disconnected']) && $_GET['disconnected'] == 1) {
    echo "<div>Vous êtes déconnecté</div>";
}
```

### Correction des exercices 15 et 16

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/40eb9f646d0d432facb212ff04491be2" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>


## 17. Vérification du mot de passe

Validons maintenant les données entrées dans le formulaire, pour être dans des conditions plus proches de la réalité.

- Ajouter (dans `variables.php` par exemple) une valeur de mot de passe attendue (par exemple 'toto')
- Dans le formulaire de connexion, vérifier que le mot de passe est correct
  - Si ça n'est pas le cas, afficher un message d'erreur
  - Si c'est le cas, afficher un message de réussite et ajouter le login dans la session
- Vérifier également que le login n'est pas vide (et afficher un message d'erreur si c'est le cas)
- Mettre en forme les messages avec Bootstrap (composant [alerts](https://getbootstrap.com/docs/5.1/components/alerts/) par exemple)

### Créer une PR (Pull Request)

- Créer une Pull Request
- Invitez quelqu'un.e qui n'est pas votre voisin.e sur votre projet
- Faites vous inviter par cette personne également
- Relisez le code et faites vos retours
- Approuvez (ou non) sa PR
- Une fois votre PR validée par un.e pair.e, vous pouvez la fusionner (merge)

### Correction

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/9239329039304a7da2ea339bebcd5929" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
