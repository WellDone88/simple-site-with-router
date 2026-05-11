import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView, // Lastes med en gang
    },
    {
      path: '/cats',
      name: 'cats',
      // LAZY LOADING: Vi slettet importen på linje 3 og bruker kun denne:
      component: () => import('../views/ShowView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: () => import('../views/ErrorPageView.vue'),
    },
  ],
})

export default router
