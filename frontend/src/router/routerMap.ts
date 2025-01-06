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
              }
            ]
          },
        ]
      },
    ]
  },
]

export default constantRouterMap