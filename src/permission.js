import router from '@/router'

// free login whitelist
const whitelist = ['/register', '/login', '/404']

/* define router rule of different state && different properties */
router.beforeEach(async (to, from, next) => {
  console.log('in before each: ' + from.path + ' ' + to.path)
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
  next()
})
