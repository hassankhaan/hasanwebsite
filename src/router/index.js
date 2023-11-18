import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/frontend/Home/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/frontend/services/service.vue')
    }
  ]
})

export default router
