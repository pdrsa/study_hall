import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'register',
    component: () => import('../components/registerComponent.vue'),
  },
  {
    path: '/registerGroup',
    name: 'registerGroup',
    component: () => import('../components/registerGroupComponent.vue'),
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../components/userComponent.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/LoginPage.vue'),
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../components/HomePage.vue'),
  }
]

const router = new VueRouter({
  routes
})

export default router
