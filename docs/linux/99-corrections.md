---
date: 2023-01-09
---

# Correction des exercices

Tous ces exercices prennent place dans un terminal Linux et sont testés avec une machine Ubuntu. Si des adaptations sont nécessaires pour un Mac ou d'autres systèmes UNIX, merci de me le signaler ;) .

Avant de commencer, ouvrir un terminal.

## 1. Commandes de base

- Créer un dossier `Work/Linux/exercices` dans votre dossier personnel

`mkdir -p Work/Linux/exercices`

- Se rendre dans ce dossier

`cd Work/Linux/exercices`

- Y créer un fichier `exercice1.txt` et copier/coller les commandes que vous avez entrées pour les énoncés précédents

`nano exercice1.txt`

Ajouter ce contenu dans le fichier :

```bash
mkdir -p Work/Linux/exercices
cd Work/Linux/exercices
```

- Créer un fichier (vide) `exercice2.txt`

```bash
touch exercice2.txt
```

- Créer un dossier `1` et un dossier `2`

```bash
mkdir 1
mkdir 2
```

Ou en une seule commande

```bash
mkdir 1 2
```

- Déplacer `exercice1.txt` dans `1` et `exercice2.txt` dans `2`

```bash
mv exercice1.txt 1
mv exercice2.txt 2
```

- Afficher la liste des fichiers et dossiers dans `Work/Linux/exercices` (avec les droits sur les fichiers)

```bash
ls -l
```

:warning: Si vous êtes dans un autre dossier, il faudra mettre à jour le chemin. Si vous êtes dans le dossier `1`, vous pouvez faire comme ceci :

```bash
ls -l ..
```

Ou

```bash
cd ..
ls -l
```

- Ajouter cet affichage à la fin du fichier `exercice1.txt`

```bash
nano 1/exercice1.txt
```

- Copier le fichier `exercice1.txt` dans un nouveau fichier `Work/Linux/exercices/1/copie.txt`

```bash
cp 1/exercice1.txt 1/copie.txt
```

- Créer un projet Git dans le dossier `Work/Linux/exercices`

```bash
git init
```

- Ajouter un premier commit

```bash
git add .
git commit -m "Un premier commit"
```

- Créer un projet GitHub et inviter `Dreeckan` sur votre projet pour relecture

> Se fait en ligne, sur votre compte GitHub

- Pousser votre commit

```bash
git add remote origin git@github.com:VotreRepositoryDistant
git branch -M
git push -u origin main
```

- Créer un dossier `2/suite` dans votre dossier d'exercices

```bash
mkdir -p 2/suite
```

- Y créer un fichier vide `suite.md`

```bash
touch 2/suite/suite.md
```

- Afficher le contenu de `exercice1.txt` dans la sortie standard

```bash
cat 1/exercice1.txt
```

Ou 

```bash
more 1/exercice1.txt
```

- Copier-coller la commande utilisée dans `suite.md`
- Afficher la dernière ligne de `exercice1.txt`

```bash
tail -n 1 1/exercice1.txt
```

- Copier-coller la commande utilisée dans `suite.md`
- Copier le fichier `exercice1.txt` dans le dossier `2/suite`

```bash
cp 1/exercice1.txt 2/suite/
```

- Faire de même pour le fichier `exercice2.txt`

```bash
cp 2/exercice2.txt 2/suite/
```

- Créer un commit et le pousser

```bash
git commit -m "Second commit"
git push
```

## 2. Fonctionnement général

Rester dans le dossier `Work/Linux/exercices`. Pour les questions ci-dessous, écrivez votre réponse dans le fichier `Work/Linux/exercices/2/exercice2.txt`.

- Quel est la taille (le poids en octets / kilo-octets) de `exercice1.txt` ?

> Pour l'obtenir, utiliser la commande `ls -lh` (le h est optionnel)

- Dans quel dossier est rangé **la configuration** d'un programme comme `apt` (ou `zsh`, si vous utilisez un Mac) ?

> Dans le dossier `/etc/`

- Avec les explications du cours, où se trouve **l'exécutable** de `apt` (ou `zsh`, si vous utilisez un Mac) ?

> Dans le dossier `/bin/`

- Quelle commande utiliser pour lister les processus actuellement actifs ? Afficher les résultats pour **tous les utilisateurs** du système et les ajouter à votre fichier.

> `ps` pour les processus de l'utilisateur, `ps -e` pour outs les utilisateurs

- Quelles sont les différences entre les commandes `less` et `more` ?

> `less` est un programme interactif n'affichant rien dans la sortie standard (une fois fermé), alors que `more` écrit dans la sortie standard et rend la main une fois le fichier complètement parcourut.

- Quelle commande utiliser pour demander "poliment" l'arrêt du programme java ?

```bash
pkill -SIGTERM java
```

Ou 

```bash
pkill -15 java
```

Ou 

```bash
killall -15 java
```

- Quelle commande utiliser pour arrêter le processus ayant l'identifiant 5240 ?

```bash
kill -SIGKILL 5240
```

Ou

```bash
kill -9 5240
```

- Créer un nouveau commit et le pousser sur GitHub.

```bash
git add .
git commit -m "Troisième commit"
git push
```

## 3. Commandes avancées

- Créer une branche (et s'y rendre) `exercice3`

```bash
git branch exercice3
git checkout exercice3
```

Ou 

```bash
git checkout -b exercice3
```

- Créer un dossier `Work/Linux/exercices/3`

```bash
mkdir 3
```

- Que se passe-t-il si vous faites un commit ? (vous écrirez votre réponse après avoir créé le fichier `exercice3.txt`)

> `git add .` renvoie une erreur : il n'y a rien à commit. Les dossiers ne sont pas visibles de Git, seuls les fichiers le sont. 

- Se rendre dans ce dossier

```bash
cd 3
```

- Y créer un fichier `exercice3.txt`

```bash
touch exercice3.txt
```

- En une seule **ligne**, créer un dossier `Work/Linux/exercices/3/chaine/` et y créer un fichier `nouveau`

```bash
mkdir chaine && cd chaine
```

- Utiliser `cat` pour ouvrir vos 3 fichiers d'exercice à la fois et afficher le contenu avec less. Écrire ensuite la commande utilisée à la fin de `exercice3.txt`

```bash
cat ../../**/exercice*.txt | less
```

Ou 

```bash
cat ../exercice3.txt ../../1/exercices1.txt  ../../2/exercices2.txt | less
```

- Utiliser une seule **commande** pour :
  - afficher la liste des fichiers et dossiers dans `Work/Linux/exercices` (avec les droits sur les fichiers) 
  - et les ajouter dans le fichier `exercice3.txt`

```bash
# Revenir au dossier exercices/
cd ../../
ls -hAl >> 3/exercice3.txt
```

- Donner les droits suivants aux dossiers et fichiers de `Work/Linux/exercices/3` :
  - les utilisateurs peuvent lire, écrire et exécuter
  - le groupe peut lire
  - les autres n'ont aucun droit

```bash
chmod 740 -R 3
```

Ou 

```bash
chmod u+rwx -R 3
chmod g=r -R 3
chmod o-rwx -R 3
```

- Changer le groupe du dossier `Work/Linux/exercices/3/chaine/` pour appartenir au groupe `root` (`staff` pour Mac).

```bash
chown :root -R 3/chaine
```

- Créer un commit

```bash
git add .
git commit -m "Quatrième commit"
```

- En une commande, supprimer tous les fichiers avec l'extension `.txt`, sans supprimer les dossiers

```bash
rm -rf **/*.txt
```

- Annuler cette suppression

```bash
git add .
git reset --hard
```

- Écrire les deux commandes dans `exercice3.txt`

- Créer un commit, pousser les modifications et créer une PR (Pull Request)

```bash
git add .
git commit -m "Cinquième et dernier commit"
git push
```

## 4. Refaire les exercices précédents - version difficile

- Refaire les exercices précédents, sans utiliser `nano`, `vim`, `VSCode` ou autre éditeur de texte
- Essayer de grouper autant que possible les commandes, pour les faire en une seule ligne

## 5. D'autres exercices en ligne

- [Utiliser less, cd, pwd, etc.](http://web.mit.edu/mprat/Public/web/Terminus/Web/main.html)
- [Un jeu d'apprentissage général de la ligne de commande](https://linuxsurvival.com/) 
