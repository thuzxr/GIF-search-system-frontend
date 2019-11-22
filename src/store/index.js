import Vue from 'vue'
import Vuex from 'vuex'
import apis from '@/http/interface'
import router, { resetRouter } from '@/router'
import qs from 'qs'

Vue.use(Vuex)

const storage = localStorage

export default new Vuex.Store({
  state: {
    themeColor: storage.getItem('themeColor') ? storage.getItem('themeColor') : 'red',
    user: storage.getItem('user') ? qs.parse(storage.getItem('user')) : { name: '', perm: '0' },
    lastClick: {
      name: ''
    },
    userInfo: storage.getItem('userinfo') ? qs.parse(storage.getItem('userinfo')) : {
      birthday: '',
      height: '',
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      country: '',
      zipCode: '',
      about: ''
    },
    favourList: new Set(),
    likeList: new Set()
  },
  mutations: {
    likeImg (state, name) {
      state.likeList.has(name) ? state.likeList.delete(name) : state.likeList.add(name)
    },
    favourImg (state, name) {
      state.favourList.has(name) ? state.favourList.delete(name) : state.favourList.add(name)
    },
    clearFavourList (state) {
      state.favourList.clear()
    },
    setFavourList (state, favours) {
      if (favours) {
        state.favourList = new Set(favours)
      } else {
        state.favourList = new Set()
      }
    },
    removeFavour (state, name) {
      state.favourList.delete(name)
    },
    setColor (state, color) {
      state.themeColor = color
      storage.setItem('themeColor', color)
    },
    setPerm (state, n) {
      state.user.perm = n.toString()
      storage.setItem('user', qs.stringify(state.user))
    },
    login (state, userState) {
      state.user.perm = userState.perm.toString()
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
      Object.assign(state.userInfo, info)
      storage.setItem('userinfo', qs.stringify(state.userInfo))
    }
  },
  actions: {
    logout ({ commit }, _data) {
      commit('logout')
      storage.removeItem('user')
      storage.removeItem('userinfo')
      resetRouter()
      router.push('/login')
      apis.logout().then(res => {
      }).catch(err => {
        alert(err)
      })
    }
  }
})
