import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: '',
      perm: 0
    }
  },
  mutations: {
    setPerm(state, n) {
      state.user.perm = n
      console.log('in store' + state.user.perm)
    }
  }
})
