
# Symfony et Angular

## Automatiser le déploiement

Pour automatiser les déploiements, on se base en général sur Git et un repository distant (GitHub, GitLab, etc.) et on utilise des outils comme :

- [Deployer, pour mettre en ligne, *via* SSH](https://deployer.org/)
- [PHPloy, pour mettre en ligne, *via* FTP](https://github.com/banago/PHPloy).

L'idée est alors de s'assurer d'avoir la dernière version de nos fichiers (ainsi que les nouveaux fichiers et les suppressions) pour les mettre en ligne. Les outils SSH permettent également de lancer automatiquement l'ensemble des commandes nécessaires à cette mise à jour (pour un site Symfony, on a souvent plusieurs commandes à lancer).

### Mise en place d'un déploiement avec Deployer

- Installer deployer avec composer `composer require deployer/deployer --dev`.
- Mettre en place la configuration nécessaire avec `./vendor/bin/dep init` (je vous conseille le format yaml)

J'obtiens un fichier `deploy.yaml` qu'il ne me reste qu'à adapter :

```yaml
# Cette ligne permet d'utiliser la configuration toute prête pour un projet Symfony
# Il ne nous reste qu'à adapter aux particularités du projet.
import:
  - recipe/symfony.php

config:
  # Cette ligne a déjà été entrée, normalement. 
  # Je vous conseille toutefois de vous assurer d'avoir le lien SSH
  repository: 'git@github.com:dreeckan/example.git'
  # Une option pour Windows, qui ne supporte pas le multiplexing
  ssh_multiplexing: false

# On configure le ou les serveurs où l'on veut déployer
hosts:
  prod.example.com:
    remote_user: deployer
    deploy_path: '/var/www/prod/'

# On peut créer des tâches supplémentaires si on le souhaite
# Deployer nous laisse, par défaut, une tâche pour lancer un build npm 
# (inutile si vous n'avez pas de javascript)
tasks:
  build:
    - cd: '{{release_path}}'
    - run: 'npm run build'

# On peut utiliser after et before pour ajouter des tâches après ou avant d'autres
# Ici, on demande de débloquer le déploiement lorsqu'un déploiement échoue
after:
  deploy:failed: deploy:unlock
```

Prenons un code un peu amélioré et voyons ce qui a été ajouté :

```yaml
# Cette ligne permet d'utiliser la configuration toute prête pour un projet Symfony
# Il ne nous reste qu'à adapter aux particularités du projet.
import:
  - recipe/symfony.php

config:
  # Cette ligne a déjà été entrée, normalement. 
  # Je vous conseille toutefois de vous assurer d'avoir le lien SSH
  repository: 'git@github.com:dreeckan/example.git'
  # On transmet notre clé SSH pour la connexion à GitHub / GitLab
  forward_agent: true
  # Pour Windows, qui ne prend pas en compte le multiplexing
  ssh_multiplexing: false
  # Je ne veux pas envoyer de stats, merci ;)
  allow_anonymous_stats: false
  # Le nom de l'utilisateur qui doit pouvoir écrire dans certains dossiers du serveur
  http_user: www-data
  # On veut utiliser la commande chmod pour permettre l'écriture dans certains dossiers
  writable_mode: 'chmod'
  # Ce chmod sera exécuté en tant que super utilisateur
  writable_use_sudo: true
  keep_releases: 5
  # Variables utilisées pour le message Discord (voir plus bas "notify:XXX")
  application: 'Example site'
  discord_webhook: "https://discordapp.com/api/webhooks/XX/XXXXXXXXXXXXXXXX"
  
  # Les dossiers partagés (conservés d'une release à l'autre)
  shared_dirs:
    - var/log
    - var/sessions
    - var/uploads/images
    - public/cache
  # Les fichiers partagés (conservés d'une release à l'autre)
  shared_files:
    - .env.local
  # Les fichiers où le serveur doit pouvoir écrire
  writable_dirs:
    - var
    - var/log
    - var/cache
    - var/sessions
    - var/uploads/images
    - public/cache

# Liste des hôtes (serveurs) où l'on souhaite déployer et leurs configurations
hosts:
  # je masque l'IP du serveur ;)
  XXX.XXX.XXX.XXX:
    # C'est l'utilisateur debian du serveur qu'on va utiliser
    remote_user: debian
    # Dans quel dossier du serveur va-t-on déployer (installer nos fichiers) ?
    deploy_path: '/var/www/www.example.com'
    # La branche à déployer
    branch: master
    # Une variable pour Discord (voir plus bas "notify:success")
    real_url: 'www.example.com'

# On définit un ensemble de tâches personnalisées, qui vont être utiles pendant/autour du déploiement.
# Il faudra encore les placer dans le processus de déploiement
tasks:
  # La tâche build va appeler la commande make update dans le dossier de la release
  # Cette commande va faire (entre autre) : composer install, npm install, passer les migrations, etc.
  # Noter l'appel à la variable release_path, définie par Deployer
  build:
    - cd: '{{release_path}}'
    - run: 'make update'
  # On exécute 2 commandes (arbitraires) pour mettre à jour les droits sur le dossier du projet.
  make:rights:
    - run: sudo chown debian:www-data -R {{ deploy_path }}
    - run: sudo chmod g+w -R {{ deploy_path }}
      
  # Des tâches pour envoyer des notifications sur Discord, grâce à un webhook
  # Noter l'appel à la variable application, discord_webhook et real_url définies par nos soins, plus haut
  notify:start:
    - run: "curl -H \"Content-Type: application/json\" -X POST -d '{\"content\": \"**Début** du déploiement de {{application}} sur le serveur **prod** !\"}' {{discord_webhook}}"
  notify:success:
    - run: "curl -H \"Content-Type: application/json\" -X POST -d '{\"content\": \"**Réussite** du déploiement de {{application}} sur le serveur **prod** ! :D Il est temps de tester sur https://{{ real_url }} !\"}' {{discord_webhook}}"
  notify:fail:
    - run: "curl -H \"Content-Type: application/json\" -X POST -d '{\"content\": \"**Échec** du déploiement de {{application}} sur le serveur **prod** >.< !\"}' {{discord_webhook}}"

# On définit quand nos tâches vont être effectuées.
before:
  # Avant de mettre en place le lien symbolique, on lance la tâche build
  deploy:symlink: build
  # Avant de lancer le déploiement, on envoie un message sur Discord
  deploy: notify:start

# On définit quand nos tâches vont être effectuées.
after:
  # après un échec de déploiement, on débloque le déploiement, et on envoie un message sur Discord
  deploy:failed:
    - deploy:unlock
    - notify:fail
  # après un déploiement, on change les droits et on envoie un message sur Discord
  deploy: 
    - make:rights
    - notify:success
```
