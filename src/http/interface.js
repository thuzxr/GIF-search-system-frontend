import axios from './axios'

/*
 * 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 */

// 单独导出
export const login = (name, password) => {
  var realUrl = '/login?user=' + name + '&password=' + password
  return axios({
    url: realUrl,
    method: 'get'
  })
}

export const register = (name, password, vericode, captchaId) => {
  var realUrl = '/register?user=' + name + '&password=' + password + '&vericode=' + vericode + '&captchaId=' + captchaId
  return axios({
    url: realUrl,
    method: 'get'
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
  var realUrl = '/search'
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
  var realUrl = '/recommend?name=' + name
  return axios({
    url: realUrl,
    method: 'get'
  })
}

export const upload = (keyword, name, title) => {
  var realUrl = '/upload?keyword=' + keyword + '&name=' + name + '&title=' + title
  return axios({
    url: realUrl,
    method: 'get'
  })
}

export const requestPerm = () => {
  var realUrl = '/userperm'
  return axios({
    url: realUrl,
    method: 'get'
  })
}

export const logout = () => {
  var realUrl = '/logout'
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
