---
date: 2024-11-29
---

# Déployer une application

[[toc]]

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

On pourrait ajouter d'autres étapes (ce qu'il se passe au sein du serveur), mais c'est une autre histoire ;).

## DevOps

La mise en place d'un processus de déploiement (un script pour l'automatiser) relève souvent du travail du DevOps.

> DevOps est un ensemble de pratiques et d'outils, ainsi qu'une philosophie culturelle. Son but est d'automatiser et d'intégrer les processus entre les équipes de développement et informatiques. DevOps met l'accent sur l'autonomisation des équipes, la communication et la collaboration transverses ainsi que l'automatisation technologique.
>
> -- <cite>[Atlassian](https://www.atlassian.com/fr/devops)</cite>

On parle de DevOps pour désigner un ensemble de méthodes de travail, permettant de simplifier la communication et le travail des développeurs et des équipes opérationnelles (d'où DevOps).
Le but est de "*graisser les rouages*" et de faciliter le travail des équipes, en général en automatisant certaines tâches (<abbr title="Continuous Integration">CI</abbr> / <abbr title="Continuous Deployment">CD</abbr>, pipelines, Actions, etc.).

![Schéma représentant le cycle de vie DevOps](https://wac-cdn.atlassian.com/dam/jcr:ef9fe684-c6dc-4ba0-a636-4ef7bcfa11f1/New%20DevOps%20Loop%20image.png?cdnVersion=2449)

## Environnements

Souvent, nos réalisations vont devoir être vérifiés par plusieurs personnes, pour vérifier la conformité avec la demande initiale :
- soit même : environnement de travail local, pour développer et voir le résultat de ce que l'on produit + tests unitaires et fonctionnels automatiques
- nos pairs / notre équipe : [SIT](https://en.wikipedia.org/wiki/System_integration_testing) ou [Test d'intégration](https://fr.wikipedia.org/wiki/Test_d%27int%C3%A9gration)
- Vérification par le client : [UAT](https://uit.stanford.edu/pmo/UAT) ou [Test de validation](https://fr.wikipedia.org/wiki/Test_de_validation)

Ensuite vient la mise en production, c'est-à-dire mettre la dernière version à disposition des clients finaux de l'application.

Toutes ces étapes nécessitent un déploiement sur un environnement différent, d'où la nécessité d'avoir un processus constant, incluant **simplement** les variations liées aux environnements.

De la même manière, ces différents environnements vont présenter exactement différents états (tickets, branches, versions, etc.) en même temps. Ce qui implique une méthodologie de travail plus générale, pour s'y retrouver.

## Bien choisir son hébergement

### Quels critères ?

- Espace disponible
- Hébergement spécialisé (Wordpress)
- Prise en compte des langages utilisés (Php / NodeJS)
- Base de données
- Accès en SSH ou non (automatisation / commandes)
- Couts ( :warning: parfois en fonction de la charge)

### Exemples d'hébergeurs

- [GitHub pages](https://pages.github.com/)
- [OVH](https://www.ovhcloud.com/fr/)
- [O2Switch](https://www.o2switch.fr/)
- [Infomaniak](https://www.infomaniak.com/fr)
- [Gandi](https://www.gandi.net/fr)

## <abbr title="File Transfert Protocol">FTP</abbr>

Un moyen simple, basique, est de déplacer les fichiers sur le serveur, *via* une interface graphique, telle que [FileZilla](https://filezilla-project.org/download.php?show_all=1), ou en ligne de commande. Il sert également à récupérer des fichiers sur le même serveur, ce qui peut permettre de partager le travail entre plusieurs ordinateurs en utilisant le serveur comme "base".

Pour des sites composés uniquement de fichiers HTML, CSS et JavaScript, c'est une méthode simple et efficace ! 

Le <abbr title="File Transfert Protocol">FTP</abbr> est un protocole de transfert de fichiers, permettant de se connecter à un serveur pour mettre en ligne des fichiers ou en récupérer depuis un serveur.

Pour déployer un site en <abbr title="File Transfert Protocol">FTP</abbr>, nous avons besoin :
- de l'adresse du site (IP ou nom de domaine)
- d'un port à utiliser
- d'un identifiant et d'un mot de passe **ou** d'une clé SSH valide (ajoutée au serveur)
- de [FileZilla](https://filezilla-project.org/download.php?show_all=1) ou d'un outil de <abbr title="File Transfert Protocol">FTP</abbr> équivalent.

Quelques [exemples de déploiement par <abbr title="File Transfert Protocol">FTP</abbr> sont disponibles dans la page suivante](05-ftp.md).

### Avantages de <abbr title="File Transfert Protocol">FTP</abbr>

- Très rapide à prendre en main
- Les hébergements les moins chers le permettent toujours
- Rien de plus efficace pour des sites simples (HTML, CSS, JS et même PHP)

### Inconvénients de <abbr title="File Transfert Protocol">FTP</abbr>

- Pose des problèmes pour la gestion de version (et le travail collaboratif)
- Plus difficilement automatisable (mais [loin d'être infaisable, des outils existent](https://github.com/banago/PHPloy))
- Pas ou peu utilisable avec des frameworks comme Symfony ou Angular (besoin de lancer des commandes)
- La complexité du déploiement augmente avec la quantité de dossiers / fichiers

## <abbr title="Secure Shell">SSH</abbr>

> Secure Shell (SSH) est un protocole de communication sécurisé. Le protocole de connexion impose un échange de clés de chiffrement en début de connexion. Par la suite, tous les segments TCP sont authentifiés et chiffrés.
>
> -- <cite>[Wikipedia](https://fr.wikipedia.org/wiki/Secure_Shell)</cite>

On parle souvent de connexion SSH pour l'établissement d'une connexion avec un serveur distant (en général, une machine Linux). Cette connexion permet d'interagir avec cette machine *via* son terminal. 

Pour établir la connexion, des échanges de clés SSH et/ou de mots de passe ont lieu pour valider l'identité de la personne qui se connecte **et** du serveur.

Exemple de clé publique qui est envoyée : 

```
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDIZSiXTcNWfFcq1vTzhvBylpaVOjNStXHb0lNSZ2zoXrDDHvHpMUuulsLJl4gpYJzqC2eCRigl9tGDdz25/RRZtzU5TJfw90bVl5cB5SxImNWZdE7g78PhoO+niEj1vcgkmh27805BvdBeSE1yVVdIt0ZexwwiKqdZmLNs66DRVC/YE9LP0CBaWmNANx1FZAoAvU1U1AJhPL9sax5xPg4hHNdAjGXusTQRyew67GcLL/ACqyX4Q81tm9QphJipfD4n7Ska318dj8ARhRTge/M4n2eIcI1RRkkDbuklMCM3mZ10oGD+Pc8gRl+RLafHL27JEWK4Ty4T7ArE0mOgsFoxZWQCcWrp08eMhviMKzNQQnuHawjpKhDGA8HbC/GfSoldOprORmp6lqbLJ32qqU0kuVhmjLdb0qH3XXfK97yHqm8G92gA1f6ACE4rsbJ5XtMbZO/7Yr6oJykJ4LYuk7NqRmhF4bRVKwL/MbOS8egIEq8xBcgGC+SSD8m54u8vWAk= remi@XXXX
```

### Avantages

- Possibilité de lancer des commandes (donc plus de possibilités)
- Très automatisable
- En général, plus sécurisé (gestion des accès par clé SSH)

### Inconvénients

- Tous les hébergements ne le permettent pas
- Gestion des accès plus ou moins aisée

### <abbr title="Secure Copy">SCP</abbr> / RSync / SFTP

Ces outils permettant de communiquer avec un serveur *via* <abbr title="Secure Shell">SSH</abbr> et de transmettre des fichiers.

<abbr title="Secure Copy">SCP</abbr> permet de copier des fichiers / dossiers (dans un sens ou dans l'autre), alors que RSync permet de Synchroniser des dossiers (transferts dans les deux sens simultanément).

## Quelques avis personnels

Il est important de choisir un hébergement **adapté** à vos besoins, non seulement au moment où vous souscrivez le contrat, mais aussi pour l'avenir et les objectifs du site que vous voulez déployer. 

Certaines offres de *cloud* peuvent être tentantes pour gérer le futur, et il faut simplement toujours avoir leurs contraintes en tête (coûts dépendant du traffic, de l'espace utilisé, etc.).

Pensez également à la charge de travail que représente le fait d'avoir un hébergement (la même chose que pour votre application). Que faut-il faire pour s'assurer qu'il reste à jour ? Quel temps cela occupe-t-il par mois ? Pouvez-vous vous le permettre ? Si ça n'est pas le cas, il faut prévoir soit un autre hébergement, soit de déléguer (faisable quand on est une entreprise ;) ).

Mettre en ligne un site en utilisant le protocole FTP ou l'outil SCP ne me semble pas viable sur le long terme. Passer un peu de temps à prévoir un peu d'automatisation peut vous faire gagner un temps précieux rapidement !

C'est pour ça qu'on utilise des outils comme :
- [Deployer](https://deployer.org/) pour nos sites (surtout PHP/Symfony)
- [GitHub Pages](https://pages.github.com/) pour les documentations
- des outils de CI/CD ([Github Actions](https://github.com/features/actions) par exemple) pour vérifier notre code **et** le mettre en ligne.

Nous avons utilisé pas mal d'autres outils par le passé et avons beaucoup auto-hébergé (avec un / des serveurs dédiés ou VPS) des sites comme celui que vous consultez actuellement, mais le temps passé en vaut-il le coût ?
