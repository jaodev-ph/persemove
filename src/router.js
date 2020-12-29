import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('@/Home'),
    },
    {
      name: 'system',
      path: '/system',
      component: () => import('@/Login'),
    }
  ]
})


export default router