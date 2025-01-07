import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { componentsPlugin } from "vuepress-plugin-components";
import { markdownExtPlugin } from '@vuepress/plugin-markdown-ext';
import { appendDatePlugin } from '@vuepress/plugin-append-date';

export default defineUserConfig({
  lang: 'fr-FR',
  base: '/cours/',
  title: 'Cours de Rémi Jarjat',
  description: 'Les formations de Rémi Jarjat pour Human Booster',

  theme: defaultTheme({
    logo: '/assets/LogoHB2.png',
    contributors: false,
    lastUpdatedText: 'Dernières mise à jour ',
    sidebar: [
      '/',
      '/general/',
      {
        text: 'Git',
        prefix: '/git/',
        link: '/git/',
        collapsible: true,
        children: [
          '0-terminologie',
          '1-before_start',
          '2-init_local',
          '3-record_changes',
          '4-branches',
          '5-common-work',
          '6-rollback',
          '7-rewrite-history',
          '8-tools',
          '98-exercices',
          '99-examples',
        ]
      },
      {
        text: 'Linux',
        prefix: '/linux/',
        link: '/linux/',
        collapsible: true,
        children: [
          '0-install',
          '1-historique',
          '2-dossiers',
          '3-processus',
          '4-bases',
          '5-advanced',
          '6-other-technologies',
          '98-exercices',
          '99-corrections',
        ]
      },
      {
        text: 'PHP',
        prefix: '/php/',
        link: '/php/',
        collapsible: true,
        children: [
          '00-environnement',
          '01-bases',
          '02-tests-et-boucles',
          '03-fonctions',
          '04-user',
          '05-temporisation-de-sortie',
          '10-doc',
          '20-objet',
          '21-heritage',
          '22-factorize',
          '30-pdo',
          '40-mvc',
          '50-rest',
          '80-bases',
          '81-multiple-files',
          '82-post-session',
          '83-cart-get-session',
          '84-objects',
          '85-bdd-pdo',
          '91-computer-preparation',
          '92-jdr',
        ]
      },
      {
        text: 'Symfony',
        prefix: '/symfony/',
        link: '/symfony/',
        collapsible: true,
        children: [
          '01-installation',
          '10-structure',
          '20-routing',
          '21-controllers',
          '22-twig',
          '23-injection',
          '24-doctrine',
          '25-formulaires',
          '26-translation',
          '27-event-listeners',
          '30-user',
          '40-bundles',
          '41-easy-admin',
          '42-api-platform',
          '80-cheat-sheet',
          '81-quotidien',
          '82-docker',
          '90-doggies',
          '99-exercices',
        ]
      },
      {
        text: 'Javascript',
        prefix: '/js/',
        link: '/js/',
        collapsible: true,
        children: [
          '1-bases',
          '2-logique',
          '3-dom',
          '4-jquery',
          '5-ajax',
          '6-poo',
          '90-webpack',
          '98-outils',
          '99-revisions',
        ]
      },
      '/lamp/',
      {
        text: 'Déploiement',
        prefix: '/deploy/',
        link: '/deploy/',
        collapsible: true,
        children: [
          '00-intro',
          '05-ftp',
          '10-wordpress',
          '20-git',
          '21-github-pages',
          '30-symfony-angular',
        ]
      },
      '/docker/',
      '/ci/',
    ]
  }),

  bundler: viteBundler(),

  plugins: [
    mdEnhancePlugin({
      // Enable mermaid
      mermaid: true,
    }),
    componentsPlugin({
      components: [
        'VidStack'
      ]
    }),
    markdownExtPlugin({
      footnote: true,
      component: true,
      tasklist: true,
    }),
    appendDatePlugin(),
  ]
})
