import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '@/views/welcome-view.vue'
import { Routes } from '@/constants/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: Routes.WELCOME,
      component: WelcomeView
    },

    {
      path: '/home',
      name: Routes.HOME,
      component: () => import('../views/home-view.vue')
    }
  ]
})

export default router
