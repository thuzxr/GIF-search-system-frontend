import store from '@/store'
/*
 * 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 */

// 单独导出
export const login = (name, password) => {
  return new Promise((resolve, reject) => {
    if (name == 'dio' && password == 'dio') {
      resolve({
        claims: { user_name: 'dio' },
        status: 1
      })
    } else if (name == 'admin' && password == '233') {
      resolve({
        claims: { user_name: 'admin' },
        status: 2
      })
    } else {
      reject(new Error('用户名或密码错误!'))
    }
  })
}

export const register = (name, password, vericode, captchaId) => {
  return new Promise((resolve, reject) => {
    if (name == '123' && password == '123' && vericode == '123' && captchaId == '123') {
      resolve({
        claims: { user_name: '123' },
        status: 1
      })
    } else {
      reject(new Error('注册失败!'))
    }
  })
}

export const getCaptchaId = () => {
  return new Promise((resolve, reject) => {
    resolve({ captchaId: '123' })
  })
}

export const search = (keyword) => {
  return new Promise((resolve, reject) => {
    reject(new Error('假的搜索接口，请更换成真正的后端进行测试！'))
  })
}

export const recommend = (name) => {
  return new Promise((resolve, reject) => {
    reject(new Error('假的推荐接口，请更换成真正的后端进行测试！'))
  })
}

export const upload = (keyword, name, title, imgFile) => {
  return new Promise((resolve, reject) => {
    reject(new Error('假的上传接口，请更换成真正的后端进行测试！'))
  })
}

export const requestPerm = () => {
  console.log('in requesetPerm')
  return new Promise((resolve, reject) => {
    resolve({ status: store.state.user.perm })
  })
}

export const logout = () => {
  return new Promise((resolve, reject) => {
    reject(new Error('假的退出接口，请更换成真正的后端进行测试！'))
  })
}

export const uploadUserInfo = (userInfo) => {
  return new Promise((resolve, reject) => {
    reject(new Error('假的上传信息接口，请更换成真正的后端进行测试！'))
  })
}

export const addFavour = (GifId) => {
  return new Promise((resolve, reject) => {
    resolve({ status: '收藏成功' })
  })
}

export const getFavourList = () => {
  return new Promise((resolve, reject) => {
    resolve({ result: null })
  })
}

export const deleteFavour = (GifId) => {
  return new Promise((resolve, reject) => {
    console.log('fake delete favour: ' + GifId)
    resolve({ result: '删除成功' })
  })
}

// 默认全部导出
export default {
  login,
  search,
  register,
  recommend,
  upload,
  getCaptchaId,
  requestPerm,
  logout,
  uploadUserInfo,
  addFavour,
  getFavourList,
  deleteFavour
}
