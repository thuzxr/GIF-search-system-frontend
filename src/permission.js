import router from '@/router'
import apis from '@/http/interface'
import store from '@/store'

// free login whitelist
const whitelist = ['/register', '/login', '/search', '/404']

/* define router rule of different state && different properties */
router.beforeEach(async (to, from, next) => {
  console.log('in before each: ' + from.path + ' ' + to.path)
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
      if (to.path === '/login') {
        next('/')
      } else {
        next()
      }
    }
  }).catch(err => {
    console.log(err)
    alert(err)
  })

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
