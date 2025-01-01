
const constantRouterMap = [
  {
    path: '/',
    name: 'Example',
    redirect: { name: 'Framework' },
    children: [
      {
        path: '/framework',
        name: 'Framework',
        component: () => import('@/views/Framework.vue'),
        redirect: { name: 'FrameworkHome' },
        children: [
          {
            path: '/framework/home',
            name: 'FrameworkHome',
            component: () => import('@/views/home/Index.vue'),
            meta: { 
              title: '首页',
              icon: 'icon-shouye-zhihui',
              isMenu: true
            },
          },
          {
            path: '/framework/daily',
            name: 'FrameworkDaily',
            component: () => import('@/views/daily/Index.vue'),
            meta: { 
              title: '日常',
              icon: 'icon-jichugongneng',
              isMenu: true
            },
          },
        ]
      },
    ]
  },
]

export default constantRouterMap