import axios from './axios'
import qs from 'qs'
import OSS from 'ali-oss'

/*
 * 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 */

// 单独导出
export const login = (name, password) => {
  return axios({
    url: '/backend_login',
    method: 'post',
    data: qs.stringify({
      user: name,
      password: password
    })
  })
}

export const register = (name, password, vericode, captchaId) => {
  return axios({
    url: '/backend_register',
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
  return axios({
    url: '/refresh_veri',
    method: 'get'
  })
}

export const search = (keyword) => {
  return axios({
    url: '/backend_search',
    method: 'get',
    withCredentials: false,
    params: {
      key: keyword
    }
  })
}

export const recommend = (name) => {
  return axios({
    url: '/backend_recommend',
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

  async function func () {
    await client.put(name + '.gif', imgFile)
    console.log('oss succeed!')
    await axios({
      url: '/backend_upload',
      method: 'post',
      data: qs.stringify({
        keyword: keyword,
        name: name,
        title: title
      })
    })
  }
  
  return func()
}

export const uploadUserInfo = (userInfo) => {
  return axios({
    url: 'backend_change_profile',
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
  return axios({
    url: '/backend_logout',
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
