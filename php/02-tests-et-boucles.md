# Tests et boucles

La [documentation PHP](https://www.php.net/manual/fr/language.control-structures.php)

En vidéo :

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/e378ba3c78a145f9b75d814f71eb02af" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>


## Conditions

```php
$variable = 1;

if ($variable == 0) {
    echo 'ok';
} elseif ($variable == -1) {
    echo 'ok aussi';
} else {
    echo 'pourquoi pas ?';
}
```

Equivalent à :

```php
$variable = 1;

switch ($variable) {
    case 0:
        echo 'ok';
        break;
    case -1:
        echo 'ok aussi';
        break;
    default:
        echo 'pourquoi pas ?';
        break;
}
```

### Condition ternaire

Une variante "courte" existe pour les conditions simples.

```php
// Avant le ?, on met notre condition (les parenthèses ne sont pas obligatoires)
// Après le ?, l'instruction à exécuter si la condition est vraie
// Après le :, l'instruction à exécuter si la condition est fausse
($variable === 1) ? echo 'ok' : echo 'pas ok';

// Le code ci-dessus est équivalent à cette structure if/else 
if ($variable === 1) {
    echo 'ok';
} else {
    echo 'pas ok';
}
```

:warning: Attention, les conditions ternaires peuvent très vite devenir difficile à relire. 

### Opérateur de fusion Null

Cet opérateur permet de vérifier l'existence d'une variable et, si elle n'est pas définie, de lui donner une valeur par défaut.

```php
// Si $tab['uneCle'] est définie, $action prendra sa valeur, sinon, $action aura la valeur "default"
$action = $tab['uneCle'] ?? 'default';

// Le code ci-dessus est équivalent à cette structure if/else 
if (isset($tab['uneCle'])) {
    $action = $tab['uneCle'];
} else {
    $action = 'default';
}
```

### Opérateurs courants

- `a == b` pour tester si les valeurs de `a` et `b` sont égales
- `a === b` pour tester si les valeurs de `a` et `b` sont égales **et** de même type
- `a != b` pour tester si les valeurs de `a` et `b` sont différentes
- `a !== b` pour tester si les valeurs de `a` et `b` sont différentes **ou** de type différent
- `a > b` pour tester si la valeur de `a` est strictement supérieure à celle de `b`
- `a >= b` pour tester si la valeur de `a` est supérieure ou égale à celle de `b`
- `a < b` pour tester si la valeur de `a` est strictement inférieure à celle de `b`
- `a <= b` pour tester si la valeur de `a` est inférieure ou égale à celle de `b`
- `a instanceof Object` pour tester si `a` est un Objet de type `Object`

## Boucles

### foreach

Une boucle particulière, permettant de facilement parcourir un tableau (ou un objet `iterable`).

```php

$elements = [1, 3, 12, 42];

foreach ($elements as $key => $value) {
    // 0 : 1 pour la première itération
    // 1 : 3 pour la deuxième
    // ...
    echo $key.' : '.$value;
}
```

Pour modifier `$value` et voir ces modifications appliquer dans le tableau `$elements`, il suffit d'un passage par référence.

```php
$elements = [1, 3, 12, 42];

foreach ($elements as $key => &$value) {
    $value = $value + 2;
}

// Ce qui est équivalent à
foreach ($elements as $key => $value) {
    $elements[$key] = $value + 2;
}

var_dump($elements); // Affichera [3, 5, 14, 44]
```

### for et while

Ces deux boucles sont assez classiques et fonctionnent comme dans beaucoup d'autres langages

```php
$elements = [1, 3, 12, 42];

for ($i = 0; $i < count($elements); $i++) {
    $elements[$i] += 2;
}

var_dump($elements); // Affichera [3, 5, 14, 44]

$j = 0;
while ($j < count($elements)) {
    $elements[$j] += 2;
    $j++;
}

var_dump($elements); // Affichera [5, 7, 16, 46]
```

## Exercices

### A. Des boucles

Dans notre affichage précédent, nous affichions chaque élément l'un après l'autre et beaucoup de code était répété. Que se passerait-il si nous avions 5 questions dans notre QCM ? 1 000 questions ? 
Sur le long terme, afficher des éléments identiques l'un après l'autre nous fait perdre du temps. Parcourir une structure complexe (comme un tableau) à l'aide de boucles nous permet de **factoriser** notre code.

Nous allons modifier la structure de stockage de nos données pour ajouter des questions : 

```php
// $qcm est un tableau, contenant toutes les questions et les réponses associées
$qcm = [
    // Chaque ligne de $qcm est un tableau contenant la question et ses réponses
    [
        // L'index "question" permet de récupérer facilement la question
        'question' => "Une superbe question de test, n'est-ce pas ?",
        // L'index "reponses" permet de récupérer facilement les réponses
        'reponses' => [
            // Les réponses n'ont ici pas d'index,
            // elles sont numérotées automatiquement.
            // (0, 1, 2, 3, etc.)
            'Magnifique !',
            'Pas mal...',
            'Top !',
            'Obi-Wan Kenobi',
        ],
    ],
];
```

1. Suivant ce modèle, ajoutez une seconde question dans votre tableau `La vie est-elle un long fleuve tranquille ?` avec comme réponses :
   - `Oui`
   - `Non`
2. Utilisez une boucle `foreach` pour afficher les questions du QCM.
3. À l'intérieur du `foreach`, utilisez une boucle `for` pour afficher les réponses à chaque question.

### B. Conditions

1. Sur la balise `<h2>` des **questions paires**, ajoutez la classe `even`.
2. Sur la balise `<li>` des **réponses paires**, ajoutez la classe `even`.
3. Ajoutez un peu de style pour distinguer ces éléments : 
   ```css
   .even {
       border-top: 1px dotted red;
   }
   ```
4. Mettez à jour vos questions et/ou réponses pour savoir quelles réponses sont les bonnes (:warning: une question peut avoir plusieurs bonnes réponses). À vous de déterminer la structure la plus judicieuse **et** de choisir les bonnes réponses.
5. Faites en sorte que la bonne réponse soit cochée au chargement de la page (c'est le QCM le plus facile du monde).