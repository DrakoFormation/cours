FIG=docker compose

# Dans la ligne de commande de notre machine, on vérifie si docker-compose est disponible
HAS_DOCKER:=$(shell command -v $(FIG) 2> /dev/null)
# Si c'est le cas, EXEC et EXEC_DB vont permettre d'exécuter des commandes dans les conteneurs
ifdef HAS_DOCKER
	EXEC=$(FIG) exec app
# Sinon, on exécute les commandes sur la machine locale
else
	EXEC=
endif

# Source pour la documentation du Makefile : http://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
.DEFAULT_GOAL := help

#
#
# Commandes principales
#
#
setup: install ## Installe le projet

install: ## Installe le projet et toutes ses dépendances, puis les assets et la base de données
	$(EXEC) npm install

update: ## Met à jour le projet, sa base de données et ses assets
	$(EXEC) npm install

upgrade: ## Met à jour le projet, sa base de données, ses assets et les versions des librairies front ET back
	$(EXEC) npm upgrade

run: ## Met à jour les assets et surveille leur modification.
	$(EXEC) npm run dev

build: ## Construit les fichiers finaux (prod)
	$(EXEC) npm run build

start:
	$(FIG) up -d

stop:
	$(FIG) down

destroy:
	$(FIG) down -v

deploy: ## Déploie sur le serveur de prod
	ansible-playbook -i ansible/prod ansible/deploy/deploy.yml
.PHONY: deploy

ansible.install:
	ansible-galaxy install ansistrano.deploy ansistrano.rollback -p ansible/deploy/roles

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-9s\033[0m %s\n", $$1, $$2}'
