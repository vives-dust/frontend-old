import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/sensor/:id',
    name: 'sensor',
    component: () => import('../views/SensorView.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
