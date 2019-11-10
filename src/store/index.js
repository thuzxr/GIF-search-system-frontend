import Vue from 'vue'
import Vuex from 'vuex'
import apis from '@/http/fake_interface'
import router, { resetRouter } from '@/router'
import qs from 'qs'

Vue.use(Vuex)

const storage = localStorage

export default new Vuex.Store({
  state: {
    user: storage.getItem('user') ? qs.parse(storage.getItem('user')) : { name: '', perm: '0' },
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
    getUserFromStorage (state) {
      state.user = storage.getItem('user') ? qs.parse(storage.getItem('user')) : { name: '', perm: '0' }
      console.log('getUserFromStorage perm: ' + state.user.perm)
    },
    setPerm (state, n) {
      state.user.perm = n.toString()
      storage.setItem('user', qs.stringify(state.user))
      console.log('in setPerm' + state.user.perm)
    },
    login (state, userState) {
      state.user.perm = userState.perm
      state.user.name = userState.name
      storage.setItem('user', qs.stringify(state.user))
    },
    logout (state) {
      state.user.name = ''
      state.user.perm = '0'
    },
    setImgName (state, name) {
      state.lastClick.name = name
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
      commit('logout')
      localStorage.clear()
      resetRouter()
      router.push('/login')
      apis.logout().then(res => {
      }).catch(err => {
        alert(err)
      })
    }
  }
})
