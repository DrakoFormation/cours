# Exercices - Objets

Pré-requis :
- avoir un environnement de travail ([Wamp](https://www.wampserver.com/) / [Xampp](https://www.apachefriends.org/fr/index.html) / [Mamp](https://www.mamp.info/en/downloads/) ou équivalent)
- avoir des bases de PHP

Correction :

- En vidéo, tout le long des exercices (après l'énoncé correspondant)
- Dans le code, sur [le repository dédié aux corrections sur GitHub](https://github.com/Dreeckan/beanies/pulls?q=is%3Apr). 

## 22. Utilisation des objets

- Créer une nouvelle branche git `utilisation-objets`
- Création d'une première classe `Beanie` qui va stocker nos données de bonnets
- Ajouter des constantes (tailles et matières) pour définir les valeurs du formulaire de tri
- Définir propriétés et méthodes
- Remplacer les tableaux dans `$mesProduits` par des objets (`$mesProduits` devient alors un tableau contenant des objets `Beanie`)
- Mettre à jour nos différentes pages en conséquence 

### Pull Request

- Créez une Pull Request
- Invitez quelqu'un.e sur votre projet
- Faites vous inviter par cette personne également
- Relisez le code et faites vos retours (vérifiez que le code valide bien les normes PSR-12 **et** PSR-4, par exemple)
- Approuvez (ou non) sa PR
- Une fois votre PR validée par un.e pair.e, vous pouvez la fusionner (merge) 

### Correction

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/c9a97caf0c784c46a7fa2d0cbf5555b2" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## 23. Liste et filtres

- Créer une nouvelle branche git `ajout-filtres`
- Sur la liste des produits `list.php`, ajouter des filtres (formulaire, avec la `method` à `POST`) :
  - Par taille (S, M, L, XL)
  - Par matière (laine, soie, coton, cachemire, etc.)
  - Par prix (avec un minimum et un maximum)
- Ajouter ces éléments dans vos données 
  - Un bonnet peut avoir plusieurs tailles disponibles
  - peut avoir plusieurs matières 

### Aides

- On va ajouter un formulaire pour ces filtres (3 champs, dont 2 champs `<select>`), que l'on va ajouter avant le tableau de `list.php`
- Les tailles et les matières vont être rangées dans des constantes de classe et ce sont ces constantes qu'on va appeler pour afficher le contenu de nos `<select>`, en appelant le tableau `Beanie::AVAILABLE_SIZES` par exemple.
- Pour filtrer les éléments de notre tableau de données, on va utiliser la fonction `array_filter()` 

## 24. Retenir les valeurs entrées dans notre formulaire

- Dans le formulaire de filtre, quand une valeur est définie (par exemple : `$minPrice = 5`), on veut qu'elle apparaisse de nouveau dans le formulaire (par défaut, les valeurs sont remises à zéro). 

### Pull Request

- Créez une Pull Request
- Invitez quelqu'un.e sur votre projet
- Faites vous inviter par cette personne également
- Relisez le code et faites vos retours (vérifiez que le code valide bien les normes PSR-12 **et** PSR-4, par exemple)
- Approuvez (ou non) sa PR
- Une fois votre PR validée par un.e pair.e, vous pouvez la fusionner (merge)

### Correction des exercices 23 et 24

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/129ebf5575bb411180767033c7116866" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## 25. Continuer la conversion en objets

- Créer les classes suivantes et les utiliser dans le code existant (dans tous les cas, je vous laisse libre pour les propriétés et les méthodes) :
  - `Contact` un objet de gestion des messages de contact (lui passer un tableau de paramètres dans le constructeur, pour faire le lien plus rapidement entre le formulaire et l'objet)
  - `BeanieFilter` un objet pour le formulaire de filtres des bonnets
  - `Cart` un objet pour gérer le panier et le mettre en session
  - `Page` un objet pour les informations d'une page
- Si du code est répété, créer un/des traits pour factoriser (les ranger dans un sous-dossier de `classes`)

### Pull Request

- Créez une Pull Request
- Invitez quelqu'un.e sur votre projet
- Faites vous inviter par cette personne également
- Relisez le code et faites vos retours (vérifiez que le code valide bien les normes PSR-12 **et** PSR-4, par exemple)
- Approuvez (ou non) sa PR
- Une fois votre PR validée par un.e pair.e, vous pouvez la fusionner (merge)

### Correction

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/7cea0beb1d9846e48245a82aeb737cc2" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
