import axios from 'axios'
import config from './config'

export default function $axios (options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: config.baseURL,
      timeout: config.timeout,
      withCredentials: config.withCredentials
    })

    // // request 拦截器
    // instance.interceptors.request.use(
    //   conf => {
    //     return conf
    //   },

    //   error => {
    //     // 请求错误时
    //     console.log('request:', error)
    //     // 1. 判断请求超时
    //     if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
    //       console.log('timeout请求超时')
    //       // return service.request(originalRequest);// 再重复请求一次
    //     }
    //     // 2. 需要重定向到错误页面
    //     const errorInfo = error.response
    //     console.log(errorInfo)
    //     // if (errorInfo) {
    //     //   error = errorInfo.data  // 页面那边catch的时候就能拿到详细的错误信息,看最下边的Promise.reject
    //     //   const errorStatus = errorInfo.status; // 404 403 500 ...
    //     //   router.push({
    //     //     path: `/error/${errorStatus}`
    //     //   })
    //     // }
    //     return Promise.reject(error) // 在调用的那边可以拿到(catch)你想返回的错误信息
    //   }
    // )

    // // response 拦截器
    // instance.interceptors.response.use(
    //   response => {
    //     let data = response.data

    //     return data
    //   },
    //   err => {
    //     if (err && err.response) {
    //       switch (err.response.status) {
    //         case 400:
    //           err.message = '请求错误'
    //           break
    //         case 401:
    //           err.message = '未授权，请登录'
    //           break
    //         case 403:
    //           err.message = '拒绝访问'
    //           break
    //         case 404:
    //           err.message = `请求地址出错: ${err.response.config.url}`
    //           break
    //         case 408:
    //           err.message = '请求超时'
    //           break
    //         case 500:
    //           err.message = '服务器内部错误'
    //           break
    //         case 501:
    //           err.message = '服务未实现'
    //           break
    //         case 502:
    //           err.message = '网关错误'
    //           break
    //         case 503:
    //           err.message = '服务不可用'
    //           break
    //         case 504:
    //           err.message = '网关超时'
    //           break
    //         case 505:
    //           err.message = 'HTTP版本不受支持'
    //           break
    //         default:
    //       }
    //     }
    //     console.error(err)
    //     return Promise.reject(err) // 返回接口返回的错误信息
    //   }
    // )

    // 请求处理
    instance(options).then(res => {
      // console.log('in axios.js:before resolve')
      resolve(res)
      return false
    }).catch(error => {
      reject(error)
      // console.log('in axios.js: before reject')
      if (error && error.response) {
        switch (error.response.status) {
          case 400:
            error.message = '请求错误'
            break
          case 401:
            error.message = '未授权，请登录'
            break
          case 403:
            error.message = '拒绝访问'
            break
          case 404:
            error.message = `请求地址出错: ${error.response.config.url}`
            break
          case 408:
            error.message = '请求超时'
            break
          case 500:
            error.message = '服务器内部错误'
            break
          case 501:
            error.message = '服务未实现'
            break
          case 502:
            error.message = '网关错误'
            break
          case 503:
            error.message = '服务不可用'
            break
          case 504:
            error.message = '网关超时'
            break
          case 505:
            error.message = 'HTTP版本不受支持'
            break
          default:
        }
        console.error(error)
        return Promise.reject(error) // 返回接口返回的错误信息
      } else {
        console.log('request:', error)
        // 1. 判断请求超时
        if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
          console.log('timeout请求超时')
          // return service.request(originalRequest);// 再重复请求一次
        }
        // 2. 需要重定向到错误页面
        const errorInfo = error.response
        console.log(errorInfo)
        // if (errorInfo) {
        //   error = errorInfo.data  // 页面那边catch的时候就能拿到详细的错误信息,看最下边的Promise.reject
        //   const errorStatus = errorInfo.status; // 404 403 500 ...
        //   router.push({
        //     path: `/error/${errorStatus}`
        //   })
        // }
        return Promise.reject(error) // 在调用的那边可以拿到(catch)你想返回的错误信息
      }
    })
  })
}
