import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/permission'

////import vGallery from 'v-gallery'

import ArgonDashboard from './plugins/argon-dashboard'

import api from './http/index'

import store from '@/store'

//Vue.use(vGallery)
Vue.use(ArgonDashboard)
Vue.use(api)

Vue.config.productionTip = false
require('./mock.js')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
