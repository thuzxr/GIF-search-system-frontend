import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import vGallery from 'v-gallery'

import ArgonDashboard from './plugins/argon-dashboard'

import api from './http/index'
Vue.use(vGallery)
Vue.use(ArgonDashboard)
Vue.use(api)

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
