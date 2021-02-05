const glob = require('glob');

let phpFiles = glob.sync('php/**/!(README).md');
let ciFiles = glob.sync('ci/**/!(README).md');

module.exports = {
  description: 'Les formations de Rémi Jarjat pour Human Booster',
  searchPlaceholder: 'Chercher...',
  lastUpdated: 'Dernière mise à jour ',
  themeConfig: {
    logo: '/assets/logo.gif',
    smoothScroll: true,
    sidebar: [
      '/',
      '/general/',
      '/git/',
      '/linux/',
      {
        title: 'PHP',
        path: '/php/',
        collapsable: true,
        sidebarDepth: 1,
        children: phpFiles
      },
      {
        title: 'Intégration continue',
        path: '/ci/',
        collapsable: true,
        sidebarDepth: 1,
        children: ciFiles
      },
    ]
  },
  plugins: {
    'robots': {
      /**
       * @host
       * Mandatory, You have to provide the host URL
       */
      host: "https://formation-hb.drakolab.fr/",
      /**
       * @disallowAll
       * Optional: if it's true, all others options are ignored and exclude all robots from the entire server
       */
      disallowAll: true,
      /**
       * @allowAll
       * Optional: if it's true and @disallowAll is false, all others options are ignored and allow all robots complete access
       */
      allowAll: false
    }
  }
}