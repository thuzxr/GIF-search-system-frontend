import axios from './axios'
import qs from 'qs'

/*
 * 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 */

// 单独导出
export const login = (name, password) => {
  return new Promise((resolve, reject) => {
    if (name == '123' && password == '123') {
      resolve({
        claims: { user_name: '123' },
        status: 1
      })
    } else {
      reject(new Error('用户名或密码错误!'))
    }
  })
}

export const register = (name, password, vericode, captchaId) => {
  var realUrl = '/backend_register'
  return axios({
    url: realUrl,
    method: 'post',
    data: qs.stringify({
      user: name,
      password: password,
      vericode: vericode,
      captchaId: captchaId
    })
  })
}

export const getCaptchaId = () => {
  var realUrl = '/refresh_veri'
  return axios({
    url: realUrl,
    method: 'get'
  })
}

export const search = (keyword) => {
  var realUrl = '/backend_search'
  return axios({
    url: realUrl,
    method: 'get',
    withCredentials: false,
    params: {
      key: keyword
    }
  })
}

export const recommend = (name) => {
  var realUrl = '/backend_recommend'
  return axios({
    url: realUrl,
    method: 'get',
    params: {
      name: name
    }
  })
}

export const upload = (keyword, name, title) => {
  var realUrl = '/backend_upload'
  return axios({
    url: realUrl,
    method: 'post',
    data: qs.stringify({
      keyword: keyword,
      name: name,
      title: title
    })
  })
}

export const requestPerm = () => {
  var realUrl = '/backend_userperm'
  return axios({
    url: realUrl,
    method: 'get'
  })
}

export const logout = () => {
  var realUrl = '/backend_logout'
  return axios({
    url: realUrl,
    method: 'get'
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
  logout
}
