export default {
  mode: 'universal',

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#fff' },

  css: [
  ],

  plugins: [
    '~/plugins/firebase',
    '~/plugins/contentful'
  ],

  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit'
  ],

  apollo: {
    clientConfigs: {
      default: '~/apollo/client-configs/default.js'
    }
  },

  markdownit: {
    injected: true,
    html: true,
    linkify: true,
    typography: true,
  },

  env: {
    // contentful
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_ACCESS_TOKEN: process.env.CTF_ACCESS_TOKEN,
    // shopify
    STORE_FRONT_ACCESS_TOKEN: process.env.STORE_FRONT_ACCESS_TOKEN,
    // firebase
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    databaseURL: process.env.FB_DATABASE_URL,
    projectId: process.env.FB_PROJECTID,
    storageBucket: process.env.FB_STORAGE_BUCKET,
    messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
    appId: process.env.FB_APP_ID
  },

  build: {
    extend(config, ctx) {
    }
  }
}
