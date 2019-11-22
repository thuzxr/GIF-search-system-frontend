import Vue from 'vue'
import Router from 'vue-router'
import NavLayout from '@/layout/NavLayout'
import DashboardLayout from '@/layout/DashboardLayout'
import AdminDashboardLayout from '@/layout/AdminDashboardLayout'
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
      },
      {
        path: '/setting',
        name: 'setting',
        component: () => import('@/views/Theme.vue')
      },
      {
        path: '/favourites',
        name: 'favourites',
        component: () => import('@/views/Favourites.vue')
      }
    ]
  }
]

export const adminRoutes = [
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
    component: AdminDashboardLayout,
    children: [
      {
        path: '/manage',
        name: 'manage',
        component: () => import('./views/Manage.vue')
      }
    ]
  }
]

const getRouter = () => {
  var currRouter = defaultRoutes
  if (store.state.user.perm === '1') {
    currRouter = userRoutes
  } else if (store.state.user.perm === '2') {
    currRouter = adminRoutes
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
}

export default router
