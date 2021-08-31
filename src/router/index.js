import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Step1 from '../views/Step1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/step-1',
    name: 'Step1',
    component: Step1
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
