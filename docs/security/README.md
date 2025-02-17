# Sécurité informatique

## Données

- Gestion des accès
  - Identifiant + mot de passe ([Infographie sur la longueur du mot de passe](https://f.hellowork.com/blogdumoderateur/2023/04/Mots-de-passe-securite.jpg))
  - double authentification
    - SMS
    - données biométriques
    - Application d'authentification
  - <abbr title="Access Control List">ACL</abbr>
    - Un identifiant est lié à des droits
    - Chaque droit donne accès à un certain nombres d'actions / fonctionnalités
- Choix d'outils
  - clé USB
  - lecteurs d'empreinte
  - reconnaissance faciale

## Stockage et des communications

Cryptage :

- Hashage
  - fonctions :
    - [MD5](https://fr.wikipedia.org/wiki/MD5)
    - [SHA](https://fr.wikipedia.org/wiki/Secure_Hash_Algorithm) (0, 1, 2 ou 3)
    - [BCrypt](https://fr.wikipedia.org/wiki/Bcrypt)
    - [PBKDF2](https://fr.wikipedia.org/wiki/PBKDF2)
- Encodage / décodage
  - Passer d'un format à un autre (JSON -> XML, .png vers .gif, etc.)
- Chiffrement
  - Symétrique (une clé commune)
  - Asymétrique (2 clés par personne)

## Anonymisation

![Protocole d'anonymisation de données](https://dbtoolsbundle.readthedocs.io/en/stable/assets/gdpr-workflow.bf86a7f8.gif)
