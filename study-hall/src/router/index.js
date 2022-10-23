import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dummy',
    component: () => import('../components/DummyComponent.vue'),
  }
]

const router = new VueRouter({
  routes
})

export default router
