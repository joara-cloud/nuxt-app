export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ara-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'description', 
        name: 'description', 
        content: '아라의 쇼핑앱' 
      },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/_index.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',

    '@nuxtjs/style-resources',
    
    // Simple usage
    '@nuxtjs/vuetify',

    // With options
    ['@nuxtjs/vuetify', { /* module options */ }]
  ],
  vuetify: {
    customVariables: ['~/scss/variables.scss'],
    // treeShake: true,
    // defaultAssets: false,
  },

  styleResources: { 
    // less: '~/assets/scss/*.scss' 
    scss: ['~/assets/scss/_index.scss']
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        [
          '@babel/plugin-proposal-private-methods', 
          { 
            loose: true 
          }
        ]
      ],
    },
  },

  // server setup (포트 번호 지정하기)
  server: {
    port: 5000,
  }
}
