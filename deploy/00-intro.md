# Déployer une application

## Un serveur, comment ça marche ?

```mermaid
%%{init: {'theme':'dark'}}%%
sequenceDiagram
    autonumber
    actor Utilisateur
    Utilisateur ->> DNS: Je veux la page www.drakona.fr
    DNS ->> Serveur: Bouge pas, je demande à 125.75.12.42
    Serveur ->> Fichiers: Cette page correspond à ce fichier
    Fichiers ->> Serveur: Tiens, voilà le rendu
    Serveur -) Utilisateur: Et voilà la page !
```

Les étapes représentées dans le schéma ci-dessus :
1. Un utilisateur demande le site `https://www.drakona.fr`.
2. La requête est transmise à un serveur <abbr title="Domain Name System">DNS</abbr>, qui va faire le lien entre le nom de domaine et une adresse IP.
3. La requête est transmise à cette adresse IP, qui correspond à un serveur, sur lequel est installé un serveur Web (Nginx / Apache / Caddy / etc).
4. Le serveur Web fait le lien entre l'url demandée et un ensemble de fichiers et ces fichiers sont interprétés / exécutés.
5. Le serveur Web renvoie la réponse à l'utilisateur.

## DevOps

## Environnements

- Test ([SIT](https://en.wikipedia.org/wiki/System_integration_testing))
- Acceptation Client ([UAT](https://uit.stanford.edu/pmo/UAT))
- prod

## Différents types de mise en production

- totale
- partielle
- progressive

## FTP, SCP et SSH


## Déploiement par FTP

En vidéo :

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/c66268b37c624ca6a801362cb87b9bd0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

Le FTP est un protocole de transfert de fichiers, permettant de se connecter à un serveur pour mettre en ligne des fichiers ou en récupérer depuis un serveur. Il peut s'utiliser en ligne de commande, ou en utilisant des interfaces graphiques, comme [FileZilla](https://filezilla-project.org/download.php?show_all=1).

Il est très utile pour les sites simples (HTML, JS, CSS), ne nécessitant pas de lancer des commandes sur le serveur ou si le serveur n'offre pas d'accès SSH.

Pour déployer un site en FTP, nous avons besoin : 
- de l'adresse du site (IP ou nom de domaine)
- d'un port à utiliser
- d'un identifiant et d'un mot de passe **ou** d'une clé SSH valide (ajoutée au serveur)
- de [FileZilla](https://filezilla-project.org/download.php?show_all=1) ou d'un outil de FTP équivalent.

### Configurer FileZilla

Les options par défaut de FileZilla font en général très bien l'affaire, si bien que nous avons seulement besoin de configurer l'accès à notre site.

Pour cela, ouvrez le gestionnaire de sites (`Fichiers > Gestionnaire de sites...` ou le bouton "Gestionnaire de sites" en haut à gauche) et entrez les informations requises.

![](/assets/img/deploy/filezilla-new-site.png)

- Protocole : FTP ou SFTP sont les deux options les plus courantes (nous allons choisir SFTP)
- Hôte : adresse IP ou nom de domaine fourni par l'hébergeur
- Chiffrement (apparait si connexion FTP) : vous permet de dire comment chiffrer la connexion (à voir selon l'hébergement)
- Type d'authentification : je vous recommande `Normale` (qui permet de retenir identifiant **et** mot de passe)

Une fois les informations entrées, plus qu'à cliquer sur `Connexion` pour tester et parcourir les fichiers.

### Transférer des fichiers

Cette partie est très simple, il suffit de déplacer les fichiers d'un côté de l'interface à l'autre.


## Exemple pratique

[Wordpress](./10-wordpress.md)
