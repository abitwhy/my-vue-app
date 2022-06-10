import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior({ hash }, _, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (hash) {
      return {
        el: hash,
      }
    }
  },
})

export default router
