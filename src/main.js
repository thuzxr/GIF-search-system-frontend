import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/permission'

import vGallery from 'v-gallery'

import ArgonDashboard from './plugins/argon-dashboard'

import api from './http/index'

import store from '@/store'

Vue.use(vGallery)
Vue.use(ArgonDashboard)
Vue.use(api)

Vue.config.productionTip = false


const on = Vue.prototype.$on

// 点击事件防抖
Vue.prototype.$on = function (event, func) {
  let previous = 0
  let newFunc = func
  if (event === 'click') {
    newFunc = function () {
      const now = new Date().getTime()
      if (previous + 1000 <= now) {
        func.apply(this, arguments)
        previous = now
      }
    }
  }
  on.call(this, event, newFunc)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
