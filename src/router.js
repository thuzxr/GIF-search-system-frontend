import Vue from 'vue'
import Router from 'vue-router'
import NavLayout from '@/layout/NavLayout'
import DashboardLayout from '@/layout/DashboardLayout'
import store from '@/store'

Vue.use(Router)

export const defaultRoutes = [
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
  }
]

export const userRoutes = [
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

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: defaultRoutes
})

const getRouter = () => {
  var currRouter = defaultRoutes
  console.log('getRouter perm: ' + store.state.user.perm)
  if (store.state.user.perm === '1') {
    console.log('succ to change the router')
    currRouter = userRoutes
  }
  return new Router({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: currRouter
  })
}

const router = getRouter()

export function resetRouter () {
  const newRouter = getRouter()
  router.matcher = newRouter.matcher // reset router
  console.log("here2")  

}

export default router
