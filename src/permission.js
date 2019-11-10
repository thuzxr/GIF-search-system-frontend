import router, { resetRouter } from '@/router'
import apis from '@/http/fake_interface'
import store from '@/store'
import qs from 'qs'

// free login whitelist
const whitelist = ['/register', '/login', '/search', '/404']

/* define router rule of different state && different properties */
router.beforeEach(async (to, from, next) => {
//   next()
  console.log('in before each: ' + from.path + ' ' + to.path)

  var user = store.state.user

  if (user.name) {
    apis.requestPerm().then(res => {
      console.log('res')
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
          next('/')
        } else {
          console.log('fuck!')
          next()
        }
      }
    }).catch(err => {
      console.log(err)
      alert(err)
    })
  } else {
    if (whitelist.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }

  // if (true) { // has sessionid
  //   /*
  //    * check whether sessionid is valid
  //    * if valid, update router
  //    * if not , redirect to /login
  //    */
  //   var _data = {
  //     'session-id': sessionid
  //   }
  //   store.dispatch('user/info', _data)
  //     .then(() => {
  //       // come here, mean not only has sessionid, but also had queryinfo and addroutes
  //       if (to.path === '/login') {
  //         // if is logged in, redirect to home page
  //         next({ path: '/' })
  //       } else {
  //         next()
  //       }
  //     })
  // } else {
  //   // has no sessionid
  //   if (whitelist.indexOf(to.path) !== -1) {
  //     next()
  //   } else {
  //     next(`/login?redirect=${to.path}`)
  //   }
  // }

  // next()
})
