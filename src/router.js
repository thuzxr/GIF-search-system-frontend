import Vue from 'vue'
import Router from 'vue-router'
import Search from './views/Search.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'search',
      component: Search
    }
    // {
    //   path: '/search',
    //   name: 'result',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/Page.vue')
    // }
  ]
})
