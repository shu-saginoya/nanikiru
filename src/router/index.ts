import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/select-regional',
      name: 'select-regional',
      component: () => import('@/views/SelectRegionalView.vue')
    }
  ]
})

export default router
