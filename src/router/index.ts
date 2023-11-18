import { createRouter, createWebHashHistory } from 'vue-router'

import routes from './systemRouter'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
