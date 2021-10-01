// const env = require('dotenv').config();
// console.log('env: ', env);

export default {
  // https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config
  publicRuntimeConfig: {
    // для «поделиться в соцсетях»
    BASE_URL: process.env.BASE_URL || 'https://ag.nn.rusatom.dev/',
    API_URL: process.env.API_URL || 'https://ag.nn.rusatom.dev/api/',
    URL_LOG_IN:
      process.env.URL_LOG_IN || 'https://ag.nn.rusatom.dev/api/entrance',
    // URL_LOG_OUT: process.env.URL_LOG_OUT || 'https://ag.nn.rusatom.dev/api/logout',
    LINK_USER_EDIT_PROFILE:
      process.env.LINK_USER_EDIT_PROFILE ||
      'http://keycloak.smartsarov.ru/account',
    LINK_USER_MAILING_SUBSCRIBE:
      process.env.LINK_USER_MAILING_SUBSCRIBE ||
      'https://account.sc.admgor.nnov.ru/account/restxq/notification-settings',
    MT_API_URL:
      process.env.MT_API_URL || 'https://sc.admgor.nnov.ru/asip-cds-nnov-ru/',
    ymapApiKey:
      process.env.YMAP_API_KEY || '2a7fc048-d4d2-4415-af46-f534aa0316b3',
    ymapGeoApiKey:
      process.env.YMAP_GEO_API_KEY || 'fba9cf15-151c-493b-ba19-3899b392f15e',
  },

  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa', // 'universal'
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Наш Север', // process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
      },

      // { name: 'http-equiv', content: 'block-all-mixed-content' },
      {
        hid: 'og:image',
        property: 'og:image',
        // content: `${
        //   process.env.BASE_URL || 'https://ag.nn.rusatom.dev/'
        // }images/logo_1.jpg`,
        // content: '/static/logo.png',
      },
      {
        hid: 'og:image:width',
        property: 'og:image:width',
        content: '400',
      },
      {
        hid: 'og:image:height',
        property: 'og:image:height',
        content: '210',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Вместе сделаем город лучше',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#8DC95E' },

  /*
   ** Global CSS
   */
  // css: [
  //   {
  //     src: '@/assets/stylus/main.styl',
  //     lang: 'stylus',
  //   },
  // ],

  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '@/plugins/axios',
    '@/plugins/v-tooltip',
    // { src: '@/plugins/vue-awesome-swiper.js', mode: 'client' },
    { src: '~/plugins/ymapPlugin.js', mode: 'client' },
    { src: '@/plugins/vueinputmask.client', mode: 'client' },
    { src: '@/plugins/infiniteLoadingPlugin', mode: 'client' },
    { src: '@/plugins/vue-image-compare', mode: 'client' },
    { src: '~/plugins/splide.client.js', ssr: false },
    { src: '@/plugins/validation.client', mode: 'client' },
    { src: '@/plugins/pluralize', mode: 'client' },
    { src: '~/plugins/videoPlayerPlugin.js', mode: 'client' },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
      // https://github.com/Krutie/nuxt-components-demo/blob/master/nuxt.config.js
      // https://ru.nuxtjs.org/blog/improve-your-developer-experience-with-nuxt-components/#lazy-loading-your-components
   */
  components: true,
  // components: [
  //   '~/components', // shortcut to { path: '~/components' }
  //   {
  //     path: '~/components/elements/',
  //   },
  //   {
  //     path: '~/components/widgets/',
  //   },
  //   {
  //     path: '~/components/layout/',
  //   },
  //   {
  //     path: '~/components/social/',
  //   },
  //   {
  //     path: '~/components/sliders/',
  //     prefix: 'Slider',
  //     ignore: ['**/*.js'],
  //   },
  //   {
  //     path: '~/components/cards/',
  //     prefix: 'Card',
  //   },
  //   {
  //     path: '~/components/forms/',
  //     prefix: 'Form',
  //   },
  // ],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    // '@nuxtjs/style-resources',
    // '@nuxtjs/dotenv',

    // Doc: https://github.com/nuxt-community/svg-sprite-module
    '@nuxtjs/svg-sprite',

    // [
    //   '@nuxtjs/date-fns',
    //   {
    //     // locales: ['ru'],
    //     defaultLocale: 'ru',
    //     format: 'yyyy-MM-dd HH:mm:ss',
    //   },
    // ],

    'nuxt-windicss',
    'nuxt-content-algolia',
    'nuxt-vite'
  ],

  /**
  {{new Date(It.updated_at.replace(/-/g, "/")).toLocaleDateString('ru-RU', {day: '2-digit',month: 'long',year: 'numeric'})}}
   */

  // styleResources: {
  //   stylus: [
  //     '~/assets/stylus/utils/_variables.styl',
  //     '~/assets/stylus/utils/_placeholders.styl',
  //     '~/assets/stylus/utils/_mixins.styl',
  //     '~/assets/stylus/utils/_typography.styl',
  //   ],
  // },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxt/content',


    '@nuxtjs/proxy',

    // Doc: https://github.com/nicolasbeauvais/vue-social-sharing
    'vue-social-sharing/nuxt',
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/toast
    '@nuxtjs/toast',

    // Doc: https://github.com/nuxt-community/universal-storage-module
    '@nuxtjs/universal-storage',

    // '@nuxtjs/yandex-metrika',
  ],
  // toast: {},

  // yandexMetrika: {
  //   id: `${process.env.YANDEX_METRIKA}` || 54792271,
  //   webvisor: true,
  //   clickmap: true,
  //   trackLinks: true,
  //   accurateTrackBounce: true,
  //   // useCDN: false,
  // },


  windicss: {
    scan: {
      dirs: ['./'],
      exclude: [
        'node_modules',
        'dist',
      ],
    },
  },


  storage: {
    initialState: {
      api_token: '',
      whoami: null,
      workMapCenter: process.env.WORK_MAP_CENTER || '[68.970682, 33.074981]',
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.API_URL || 'https://ag.nn.rusatom.dev/api/',
    // baseURL: 'http://localhost:3000/api/',
    proxyHeaders: false,
    credentials: false,
    /*
    headers: {
      common: {
        Authorization: 'Basic ZGVtby5ib29rMjQ6Ym9vazI0',
        'X-TOKEN': '330d207892855dbd5abd5147ea562094'
      }
    }
    */
  },







  // proxy: ['https://ag.nn.rusatom.dev/api'],
  /*
   ** SVG Sprite module configuration
   ** See https://github.com/nuxt-community/svg-sprite-module#options
   */
  // svgSprite: {
  //   input: '~/assets/sprite/svg/',
  // },

  
  nuxtContentAlgolia: {
    appId: process.env.ALGOLIA_APP_ID,
    apiKey: process.env.ALGOLIA_API_KEY,
    paths: [
      {
        name: 'documentation',
        index: 'docs',
        fields: ['title', 'description', 'bodyPlainText']
      }
    ]
  },



  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vue-instantsearch', 'instantsearch.js/es']
  },
  hooks: {
    'content:file:beforeInsert': (document) => {
      const removeMd = require('remove-markdown');
      if (document.extension === '.md') {
        document.bodyPlainText = removeMd(document.text);
      }
    },
  },
};
