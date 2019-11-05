import Vue from 'vue'
import Router from 'vue-router'
import NavLayout from '@/layout/NavLayout.vue'
import DashboardLayout from '@/layout/DashboardLayout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'search',
      component: NavLayout,
      children: [
        {
          path: '/search',
          name: 'search',
          component: () => import('@/views/Search.vue')
        },
        {
          path: '/login',
          name: 'login',
          component: () => import('@/views/Login.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('@/views/Register.vue')
        }
      ]
    },
    {
      path: '/dash',
      redirect: 'dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('./views/Dashboard.vue')
        },
        {
          path: '/icons',
          name: 'icons',
          component: () => import('./views/Icons.vue')
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import('./views/UserProfile.vue')
        },
        {
          path: '/recommend',
          name: 'recommend',
          component: () => import('@/views/Recommend.vue')
        },
        {
          path: '/upload',
          name: 'upload',
          component: () => import('@/views/Upload.vue')
        }
      ]
    }
  ]
})
