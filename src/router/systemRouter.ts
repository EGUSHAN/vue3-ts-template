import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    name: 'layout',
    path: '/',
    redirect: 'sortablejs'
  },
  {
    name: 'sortablejs',
    path: '/sortablejs',
    component: () => import(/* webpackChunkName: "sortablejs" */ '@/views/sortablejs/index.vue')
  },
  {
    name: 'theme',
    path: '/theme',
    component: () => import(/* webpackChunkName: "theme" */ '@/views/theme/index.vue')
  },
  {
    name: 'fontSize',
    path: '/fontSize',
    component: () => import(/* webpackChunkName: "fontSize" */ '@/views/fontSize/index.vue')
  }
]

export default routes
