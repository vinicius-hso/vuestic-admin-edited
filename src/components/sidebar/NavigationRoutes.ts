export interface INavigationRoute {
  name: string
  displayName: string
  meta: { icon: string }
  children?: INavigationRoute[]
}

export default {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    //? PAINEL PRINCIPAL
    {
      name: 'dashboard',
      displayName: 'menu.dashboard',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
    //? ESTATÍSTICAS
    {
      // name: 'statistics',
      // displayName: 'menu.statistics',
      name: 'ranking',
      displayName: 'menu.ranking',
      meta: {
        icon: 'vuestic-iconset-statistics',
      },
      disabled: true,
      children: [
        // {
        //   name: 'charts',
        //   displayName: 'menu.charts',
        // },
        // {
        //   name: 'progress-bars',
        //   displayName: 'menu.progressBars',
        // },
        {
          name: 'tariffs',
          displayName: 'menu.tariffs',
        },
        {
          name: 'timeline',
          displayName: 'menu.timeline',
        },
        {
          name: 'topfive',
          displayName: 'menu.topfive',
        },
      ],
    },
    //? FORMULÁRIOS
    // {
    //   name: 'forms',
    //   displayName: 'menu.forms',
    //   meta: {
    //     icon: 'vuestic-iconset-forms',
    //   },
    //   disabled: true,
    //   children: [
    //     {
    //       name: 'form-elements',
    //       displayName: 'menu.formElements',
    //     },
    //     {
    //       name: 'medium-editor',
    //       displayName: 'menu.mediumEditor',
    //     },
    //   ],
    // },
    //? TABELAS
    {
      // name: 'tables',
      // displayName: 'menu.tables',
      name: 'comparator',
      displayName: 'menu.comparator',
      meta: {
        icon: 'vuestic-iconset-tables',
      },
      children: [
        // {
        //   name: 'markup',
        //   displayName: 'menu.markupTables',
        // },
        // {
        //   name: 'data',
        //   displayName: 'menu.dataTables',
        // },
        {
          name: 'products-services',
          displayName: 'menu.productsServices',
        },
        {
          name: 'banks',
          displayName: 'menu.banks',
        },
        {
          name: 'currency',
          displayName: 'menu.currency',
        },
      ],
    },
    //? ELEMENTOS UI
    // {
    //   name: 'ui',
    //   displayName: 'menu.uiElements',
    //   meta: {
    //     icon: 'vuestic-iconset-ui-elements',
    //   },
    //   disabled: true,
    //   children: [
    //     {
    //       name: 'buttons',
    //       displayName: 'menu.buttons',
    //     },
    //     {
    //       name: 'cards',
    //       displayName: 'menu.cards',
    //     },
    //     {
    //       name: 'chat',
    //       displayName: 'menu.chat',
    //     },
    //     {
    //       name: 'chips',
    //       displayName: 'menu.chips',
    //     },
    //     {
    //       name: 'collapses',
    //       displayName: 'menu.collapses',
    //     },
    //     {
    //       name: 'colors',
    //       displayName: 'menu.colors',
    //     },
    //     // {
    //     //   name: 'color-pickers',
    //     //   displayName: 'menu.colorPickers',
    //     // },
    //     {
    //       name: 'file-upload',
    //       displayName: 'menu.fileUpload',
    //     },
    //     {
    //       name: 'grid',
    //       displayName: 'menu.grid',
    //     },
    //     {
    //       name: 'icon-sets',
    //       displayName: 'menu.icons',
    //       children: [
    //         {
    //           displayName: 'concrete',
    //           name: 'icon-set',
    //         },
    //       ],
    //     },
    //     {
    //       name: 'lists',
    //       displayName: 'menu.lists',
    //     },
    //     {
    //       name: 'modals',
    //       displayName: 'menu.modals',
    //     },
    //     {
    //       name: 'notifications',
    //       displayName: 'menu.notifications',
    //     },
    //     {
    //       name: 'popovers',
    //       displayName: 'menu.popovers',
    //     },
    //     {
    //       name: 'rating',
    //       displayName: 'menu.rating',
    //     },
    //     {
    //       name: 'sliders',
    //       displayName: 'menu.sliders',
    //     },
    //     {
    //       name: 'spacing',
    //       displayName: 'menu.spacing',
    //     },
    //     {
    //       name: 'spinners',
    //       displayName: 'menu.spinners',
    //     },
    //     {
    //       name: 'tabs',
    //       displayName: 'menu.tabs',
    //     },
    //     // {
    //     //   name: "timelines",
    //     //   displayName: "menu.timelines",
    //     // },
    //     {
    //       name: 'tree-view',
    //       displayName: 'menu.treeView',
    //     },
    //     {
    //       name: 'typography',
    //       displayName: 'menu.typography',
    //     },
    //   ],
    // },
    //? MAPAS
    // {
    //   name: 'maps',
    //   displayName: 'menu.maps',
    //   meta: {
    //     icon: 'vuestic-iconset-maps',
    //   },
    //   disabled: true,
    //   children: [
    //     {
    //       name: 'maplibre-maps',
    //       displayName: 'menu.maplibre-maps',
    //     },
    //     {
    //       name: 'yandex-maps',
    //       displayName: 'menu.yandex-maps',
    //     },
    //     {
    //       name: 'leaflet-maps',
    //       displayName: 'menu.leaflet-maps',
    //     },
    //     {
    //       name: 'bubble-maps',
    //       displayName: 'menu.bubble-maps',
    //     },
    //     {
    //       name: 'line-maps',
    //       displayName: 'menu.line-maps',
    //     },
    //   ],
    // },
    //? MENU PAGES
    // {
    //   name: 'pages',
    //   displayName: 'menu.pages',
    //   meta: {
    //     icon: 'vuestic-iconset-files',
    //   },
    //   disabled: true,
    //   children: [
    //     {
    //       name: 'login',
    //       displayName: 'menu.login-singup',
    //     },
    //     {
    //       name: '404-pages',
    //       displayName: 'menu.404-pages',
    //     },
    //     {
    //       name: 'faq',
    //       displayName: 'menu.faq',
    //     },
    //   ],
    // },
  ] as INavigationRoute[],
}
