import Vue from 'vue'
import Vuex from 'vuex'
import apis from '@/http/interface'
import router, { resetRouter } from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: '',
      perm: 0
    }
  },
  mutations: {
    setPerm (state, n) {
      state.user.perm = n
      console.log('in store' + state.user.perm)
    },
    login (state, userState) {
      state.user.perm = userState.perm
      state.user.name = userState.name
    },
    logout (state) {
      state.user.name = ''
      state.user.perm = 0
    }
  },
  actions: {
    logout ({ commit }, _data) {
      apis.logout().then(res => {
        commit('logout')
        resetRouter()
        router.push('/login')
      })
    }
  }
})
