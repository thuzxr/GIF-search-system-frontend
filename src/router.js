import Vue from 'vue'
import Router from 'vue-router'
import Search from './views/Search.vue'
import Manage from './views/Manage.vue'
import Recommend from './views/Recommend.vue'

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
    component: Manage
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: Recommend
  }
  ]
})
