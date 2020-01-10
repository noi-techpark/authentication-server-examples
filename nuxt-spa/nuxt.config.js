export default {
  mode: 'spa',
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
  auth: {
    redirect: {
      login: '/',
      logout: '/',
      home: '/profile',
      callback: '/profile'
    },
    strategies: {
      noi: {
        _scheme: 'oauth2',
        authorization_endpoint:
          'https://auth.aboutbits.local/auth/realms/NOI/protocol/openid-connect/auth',
        userinfo_endpoint:
          'https://auth.aboutbits.local/auth/realms/NOI/protocol/openid-connect/userinfo',
        scope: ['openid', 'profile', 'email'],
        response_type: 'id_token',
        token_type: 'Bearer',
        redirect_uri: 'http://localhost:3000/profile',
        client_id: 'nuxt-spa-example'
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
