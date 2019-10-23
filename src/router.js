import Vue from 'vue'
import Router from 'vue-router'
import Search from './views/Search.vue'
import Manage from './views/Manage.vue'
import Recommend from './views/Recommend.vue'
import AuthLayout from '@/layout/AuthLayout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'search',
      component: Search
    },
    {
      path: '/manage',
      name: 'manage',
      component: AuthLayout,
            children: [
              {
                path: '/login',
                name: 'login',
                component: () => import(/* webpackChunkName: "demo" */ './views/Login.vue')
              },
              {
                path: '/register',
                name: 'register',
                component: () => import(/* webpackChunkName: "demo" */ './views/Register.vue')
              }
            ]
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    }
  ]
})
