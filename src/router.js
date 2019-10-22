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
  ]
})
