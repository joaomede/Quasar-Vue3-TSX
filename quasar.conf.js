const path = require('path')
const { configure } = require('quasar/wrappers')

module.exports = configure(function (ctx) {
  return {
    // app boot file (/src/boot)
    boot: [],
    sourceFiles: {
      rootComponent: 'src/App.tsx'
    },

    supportTS: {
      tsCheckerConfig: {
        eslint: {
          enabled: false,
          files: './src/**/*.{ts,tsx,js,jsx,vue}'
        }
      }
    },

    css: ['app.sass'],

    extras: [
      'roboto-font',
      'material-icons', // optional, you are not bound to it
      // 'ionicons-v4',
      // 'mdi-v3',
      // 'themify',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!
      'fontawesome-v5'
      // 'eva-icons'
    ],

    framework: {
      // all: true, // --- includes everything; for dev only!
      iconSet: 'material-icons',
      lang: 'pt-BR', // Quasar language pack
      all: false,
      components: [
        'QLayout',
        'QHeader',
        'QDrawer',
        'QPageContainer',
        'QPage',
        'QToolbar',
        'QToolbarTitle',
        'QBtn',
        'QIcon',
        'QList',
        'QItem',
        'QItemSection',
        'QItemLabel',
        'QTooltip',
        'QInput',
        'QCard',
        'QCardSection',
        'QCardActions',
        'QDialog',
        'QForm',
        'QFooter',
        'QAvatar',
        'QScrollArea',
        'QImg',
        'QTabs',
        'QTab',
        'QRouteTab',
        'QTabPanels',
        'QTabPanel',
        'QFab',
        'QFabAction',
        'QSeparator',
        'QBar',
        'QSpace',
        'QSelect',
        'QRadio',
        'QTime',
        'QDate',
        'QPopupProxy',
        'QTable',
        'QTh',
        'QTr',
        'QTd',
        'QCheckbox',
        'QToggle',
        'QSpinnerHourglass',
        'QPageSticky',
        'QTimeline',
        'QTimelineEntry',
        'QBadge',
        'QStepper',
        'QStep',
        'QStepperNavigation'
      ],

      directives: ['Ripple'],

      // Quasar plugins
      plugins: ['Notify', 'ClosePopup', 'Cookies', 'Loading']

      // iconSet: 'ionicons-v4'
      // lang: 'de' // Quasar language
    },

    supportIE: false,

    build: {
      // env: {  },
      scopeHoisting: true,
      vueRouterMode: 'history',
      showProgress: true,
      // vueCompiler: true,
      gzip: false,
      vueLoaderOptions: {
        moduleWarnings: false
      },

      analyze: false,
      // extractCSS: false,
      chainWebpack(cfg, { isClient, isServer }) {
        // tsx
        cfg.module
          .rule('tsx')
          .test(/\.ts(x?)$/)
          .use('babel-loader')
          .loader('babel-loader')
          .tap((opts) => {
            opts = {
              babelrc: true
            }
            return opts
          })
          .end()

        cfg.module
          .rule('tsx')
          .test(/\.ts(x?)$/)
          .use('ts-loader')
          .loader('ts-loader')
          .tap((opts) => {
            opts = {
              appendTsSuffixTo: [/\.vue$/],
              transpileOnly: true
            }
            return opts
          })
          .end()

        cfg.resolve.extensions.merge(['.ts', '.tsx', '.vue']).end()

        cfg.resolve.alias
          .set('@', path.resolve(__dirname, './'))
          .set('vue$', 'vue/dist/vue.esm-bundler.js')
          .end()
      }
    },

    devServer: {
      // https: true,
      // port: 8080,
      open: true // opens browser window automatically
    },

    // animations: 'all', // --- includes all animations
    animations: [],

    // https://quasar.dev/quasar-cli/developing-ssr/configuring-ssr
    ssr: {
      pwa: false
    },

    // https://quasar.dev/quasar-cli/developing-pwa/configuring-pwa
    pwa: {
      // workboxPluginMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
      workboxOptions: {
        skipWaiting: true,
        clientsClaim: true
      },

      manifest: {
        name: 'Example TSX',
        short_name: 'Example TSX',
        description: 'Example TSX',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: 'statics/icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: 'statics/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'statics/icons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: 'statics/icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: 'statics/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },

    // Full list of options: https://quasar.dev/quasar-cli/developing-cordova-apps/configuring-cordova
    cordova: {
      id: 'org.cordova.quasar.app'
      // noIosLegacyBuildFlag: true // uncomment only if you know what you are doing
    },

    // Full list of options: https://quasar.dev/quasar-cli/developing-capacitor-apps/configuring-capacitor
    capacitor: {
      hideSplashscreen: true
    },

    // Full list of options: https://quasar.dev/quasar-cli/developing-electron-apps/configuring-electron
    electron: {
      bundler: 'packager', // 'packager' or 'builder'

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options
        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',
        // Windows only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        appId: 'app'
      },

      // keep in sync with /src-electron/main-process/electron-main
      // > BrowserWindow > webPreferences > nodeIntegration
      // More info: https://quasar.dev/quasar-cli/developing-electron-apps/node-integration
      nodeIntegration: true,

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      extendWebpack(cfg) {
        // do something with Electron main process Webpack cfg
        // chainWebpack also available besides this extendWebpack
      }
    }
  }
})
