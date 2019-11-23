// 导入所有接口
import apis from './interface'

const install = Vue => {
  if (install.installed) { return }

  install.installed = true

  Object.defineProperties(Vue.prototype, {
    // 注意，此处挂载在 Vue 原型的 $api 对象上
    $api: {
      get () {
        console.log('in http.index.js')
        return apis
      }
    }
  })
}

export default install
