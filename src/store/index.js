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
    },
    lastClick: {
      name: ''
    },
    userInfo: {
      username: '',
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      country: '',
      zipCode: '',
      about: ''
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
    },
    setName (state, name) {
      state.lastClick.name = name
      console.log('im herre!!!')
    },
    setUserInfo (state, info) {
      state.userInfo.username = info.username
      state.userInfo.email = info.email
      state.userInfo.firstName = info.firstName
      state.userInfo.lastName = info.lastName
      state.userInfo.address = info.address
      state.userInfo.city = info.city
      state.userInfo.country = info.country
      state.userInfo.zipCode = info.zipCode
      state.userInfo.about = info.about
      console.log('username', state.userInfo.username)
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
