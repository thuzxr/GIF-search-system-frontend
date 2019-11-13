import router, { resetRouter } from '@/router'
import apis from '@/http/interface'
import store from '@/store'

// free login whitelist
const whitelist = ['/register', '/login', '/search', '/404']

/* define router rule of different state && different properties */
router.beforeEach(async (to, from, next) => {
//   next()
  console.log('in before each: ' + from.path + ' ' + to.path)

  var user = store.state.user

  if (user.name) {
    apis.requestPerm().then(res => {
      if (res.status === 0 || res.status === -1) {
        store.commit('logout')
        if (whitelist.indexOf(to.path) !== -1) {
          next()
        } else {
          next(`/login?redirect=${to.path}`)
        }
      } else {
        store.commit('setPerm', res.status)
        resetRouter()
        if (to.path === '/login') {
          next('/search')
        } else {
          next()
        }
      }
    }).catch(err => {
      console.log(err)
      next(err)
      alert(err)
    })
  } else {
    if (whitelist.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})
