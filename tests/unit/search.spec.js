import Vue from 'vue'
import Search from '@/views/Search'
import { shallowMount } from '@vue/test-utils'

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
    const wrapper = shallowMount(Search)
    // const wrapper = mount(Search)
    expect(typeof Search.data).toBe('function')
    var data = Search.data()
    expect(data.err).toBe(false)
    expect(wrapper.contains('img-gallery'))
    // expect(wrapper.classes(''))
  })

  it('correctly sets the message when created', () => {
    const vm = new Vue(Search).$mount()
    expect(vm.err).toBe(false)
    expect(vm.imgList.length).toBe(0)
  })

  it('renders an error when there is no return gif', () => {
    const wrapper = shallowMount(Search, {
      data: {
        err: false
      }
    })

    expect(wrapper.contains('h2')).toBe(true)
    expect(wrapper.html()).toContain('Oops! 找不到你想要的Gif')
  })
})
