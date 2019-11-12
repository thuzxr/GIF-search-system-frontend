import axios from './axios'
import qs from 'qs'
import OSS from 'ali-oss'

/*
 * 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 */

// 单独导出
export const login = (name, password) => {
  var realUrl = '/backend_login'
  return axios({
    url: realUrl,
    method: 'post',
    data: qs.stringify({
      user: name,
      password: password
    })
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

export const upload = (keyword, name, title, imgFile) => {
  let client = new OSS({
    region: 'oss-cn-beijing',
    accessKeyId: 'LTAI4FduW6Yf6AZY8ysPGmB9',
    accessKeySecret: '2eayaXUYwzCzK8HuOv8yrqRvtmsxd9',
    bucket: 'gif-dio'
  })

  let result = client.put(name + '.gif', imgFile)
  console.log(result)

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

export const uploadUserInfo = (userInfo) => {
  var realUrl = 'backend_change_profile'
  return axios({
    url: realUrl,
    method: 'post',
    data: qs.stringify({
      Email: userInfo.email,
      FirstName: userInfo.firstName,
      LastName: userInfo.lastName,
      Addr: userInfo.address,
      City: userInfo.city,
      Country: userInfo.country,
      ZipCode: userInfo.zipCode,
      About: userInfo.about
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
  uploadUserInfo,
  getCaptchaId,
  requestPerm,
  logout
}
