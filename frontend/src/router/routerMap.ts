const constantRouterMap = [
  {
    path: '/',
    name: 'Example',
    redirect: { name: 'Framework' },
    children: [
      {
        path: '/framework',
        name: 'Framework',
        //@ts-ignore
        component: () => import('@/views/Framework.vue'),
        redirect: { name: 'FrameworkHome' },
        children: [
          {
            path: '/framework/home',
            name: 'FrameworkHome',
            //@ts-ignore
            component: () => import('@/views/home/Index.vue'),
            meta: { 
              title: '首页',
              icon: 'icon-shouye-zhihui',
              isMenu: true,
              menuType: 1
            },
          },
          {
            path: '/framework/feature',
            name: 'FrameworkFeature',
            //@ts-ignore
            component: () => import('@/views/feature/Index.vue'),
            meta: { 
              title: '功能',
              icon: 'icon-jichugongneng',
              isMenu: true,
              menuType: 1
            },
            redirect: { name: 'FrameworkFeatureDaily' },
            children: [
              {
                path: '/framework/feature/daily',
                name: 'FrameworkFeatureDaily',
                //@ts-ignore
                component: () => import('@/views/feature/daily/Index.vue'),
                meta: {
                  title: '日常',
                  isMenu: true,
                  menuType: 2
                },
              },
              {
                path: '/framework/feature/level',
                name: 'FrameworkFeatureLevel',
                //@ts-ignore
                component: () => import('@/views/feature/level/Index.vue'),
                meta: {
                  title: '闯关',
                  isMenu: true,
                  menuType: 2
                },
              },
              {
                path: '/framework/feature/endless',
                name: 'FrameworkFeatureEndless',
                //@ts-ignore
                component: () => import('@/views/feature/endless/Index.vue'),
                meta: {
                  title: '无尽',
                  isMenu: true,
                  menuType: 2
                },
              },
              {
                path: '/framework/feature/pvp',
                name: 'FrameworkFeaturePvp',
                //@ts-ignore
                component: () => import('@/views/feature/pvp/Index.vue'),
                meta: {
                  title: 'PVP',
                  isMenu: true,
                  menuType: 2
                },
              },
              {
                path: '/framework/feature/period',
                name: 'FrameworkFeaturePeriod',
                //@ts-ignore
                component: () => import('@/views/feature/period/Index.vue'),
                meta: {
                  title: '活动关卡',
                  isMenu: true,
                  menuType: 2
                },
              },
              {
                path: '/framework/feature/boss',
                name: 'FrameworkFeatureBoss',
                //@ts-ignore
                component: () => import('@/views/feature/boss/Index.vue'),
                meta: {
                  title: 'BOSS关卡',
                  isMenu: true,
                  menuType: 2
                },
              },
              {
                path: '/framework/feature/hyperboss',
                name: 'FrameworkFeatureHyperBoss',
                //@ts-ignore
                component: () => import('@/views/feature/hyperboss/Index.vue'),
                meta: {
                  title: '超限BOSS',
                  isMenu: true,
                  menuType: 2
                },
              },
              {
                path: '/framework/feature/expedition',
                name: 'FrameworkFeatureExpedition',
                //@ts-ignore
                component: () => import('@/views/feature/expedition/Index.vue'),
                meta: {
                  title: '远征巡航',
                  isMenu: true,
                  menuType: 2
                },
              },
            ]
          },
          {
            path: '/framework/my',
            name: 'FrameworkMy',
            //@ts-ignore
            component: () => import('@/views/my/Index.vue'),
            meta: {
              title: '我的',
              icon: 'icon-my',
              isMenu: true,
              menuType: 1
            },
          },
        ]
      },
    ]
  },
]

export default constantRouterMap