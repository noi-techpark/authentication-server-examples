export default {
  mode: 'spa',
  env: {
    resource: process.env.RESOURCE_URI || 'http://localhost:8085'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios', '@nuxtjs/auth'],
  axios: {
    credentials: true
  },
  auth: {
    redirect: {
      login: '/',
      logout: '/',
      home: '/profile',
      callback: '/callback'
    },
    strategies: {
      noi: {
        _scheme: 'oauth2',
        authorization_endpoint: process.env.KEYCLOAK_AUTHORIZATION_URI || 'http://localhost:8080/auth/realms/NOI/protocol/openid-connect/auth',
        userinfo_endpoint: process.env.KEYCLOAK_USERINFO_URI || 'http://localhost:8080/auth/realms/NOI/protocol/openid-connect/userinfo',
        scope: ['profile', 'email'],
        response_type: 'token',
        token_key: 'access_token',
        token_type: 'Bearer',
        redirect_uri: process.env.KEYCLOAK_CALLBACK || 'http://localhost:3000/callback',
        client_id: process.env.KEYCLOAK_CLIENT_ID || 'nuxt-spa'
      }
    }
  },
  router: {
    middleware: ['auth']
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
