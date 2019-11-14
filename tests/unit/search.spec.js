import Vue from 'vue'
import Search from '@/views/Search'
import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import SearchInput from '@/components/SearchInput'
import storeConfig from './store-config'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)
// import { cloneDeep } from 'lodash'
// import { ImgGallery } from '@/components/ImgGallery.vue'
// const factory = (values = {}) => {
//   return shallowMount(Search), {
//     data() {
//       return {
//         imgList: [],
//         err: false
//       }
//     }
//   }
// }
describe('Search', () => {
  // const wrapper = shallowMount(Search)
  // 检查原始组件选项
  it('has a data hook', () => {
    // const wrapper = factory()
    //const wrapper = shallowMount(Search)
    //expect(typeof Search.data).toBe('function')
    //var data = Search.data()
    //expect(data.err).toBe(false)
  })

  
})
