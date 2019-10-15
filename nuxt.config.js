import { createRoutesArray } from './api/api.js'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'pl'
    },
    title: '19 PDH Puszcza',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'all' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        name: 'google-site-verification',
        content: 'V9-RG4-ertDzO9hqxuG29PkDUM8PGqaSOYUMiMaGUOY'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: '/assets/og/default.png'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href:
          'https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap',
        rel: 'stylesheet'
      }
    ]
  },
  generate: {
    routes: createRoutesArray()
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
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient }) {
      if (isClient) {
        config.node = {
          fs: 'empty',
          child_process: 'empty',
          tls: 'empty',
          net: 'empty'
        }
      }
      config.module.rules.push({
        test: /\.md$/,
        use: ['raw-loader']
      })
    }
  },
  hooks: {
    generate: {
      routeCreated({ route, path, errors }) {
        console.log(route)
        console.log(path)
        console.log(errors)
      }
    }
  }
}
