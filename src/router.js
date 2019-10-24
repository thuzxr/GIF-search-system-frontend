import Vue from 'vue'
import Router from 'vue-router'
import Manage from './views/Manage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'search',
      component: Manage,
      children: [
        {
          path: '/search',
          name: 'search',
          component: () => import('./views/Search.vue')
        },
        {
          path: '/login',
          name: 'login',
          component: () => import('./views/Login.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('./views/Register.vue')
        },
        {
          path: '/recommend',
          name: 'recommend',
          component: () => import('./views/Recommend.vue')
        },
      ]
    }
  ]
})
