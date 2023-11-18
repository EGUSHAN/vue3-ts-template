import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    name: 'layout',
    path: '/',
    component: () => import(/* webpackChunkName: "layout" */ '../layout/index.vue')
  },
  {
    name: 'upload',
    path: '/upload',
    component: () => import(/* webpackChunkName: "layout" */ '../views/UploadPage.vue')
  }
]

export default routes
