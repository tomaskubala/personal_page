exports.config = {
  files: {
      javascripts: {
          joinTo: 'assets/app.js'
      },
      stylesheets: {
          joinTo: 'assets/style.css'
      }
  },

  conventions: {
      assets: /^(static)/
  },

  paths: {
      watched: ["static", "css", "js"],
      public: "docs"
  },

  plugins: {
      pug: {
          staticPretty: true,
          pugRuntime: false
      },
      autoReload: {
          enabled: {
              css: true,
              js: true,
              assets: true
          }
      }
  },

  modules: {
      autoRequire: {
          'assets/app.js': ['js/app']
      }
  },

  server: {
      port: 4000,
      hostname: '0.0.0.0'
  },

  npm: {
      enabled: true
  }
}
