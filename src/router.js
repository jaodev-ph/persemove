import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      components: () => import('@/App'),
    }
  ]
})


export default router