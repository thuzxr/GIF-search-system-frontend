import Vue from 'vue'
import Search from '@/views/Search'
import { shallowMount, mount } from '@vue/test-utils'
import SearchInput from '@/components/SearchInput'
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
    expect(typeof Search.data).toBe('function')
    var data = Search.data()
    expect(data.err).toBe(false)
  })

  it('has correct html', () => {
    const wrapper = mount(Search)
    expect(wrapper.contains('img-gallery'))
  })

  it('correctly sets the message when created', () => {
    const vm = new Vue(Search).$mount()
    expect(vm.err).toBe(false)
    expect(vm.imgList.length).toBe(0)
  })

  it('renders an error when there is no return gif', () => {
    const wrapper = mount(Search, {
      data: {
        err: false
      }
    })
    wrapper.setData({err: false});
    // 组件状态wrapper.setProps({})
    expect(wrapper.contains('h2')).toBe(true)// ???
    expect(wrapper.html()).toContain('Oops! 找不到你想要的Gif')
  })

  it('test search function, fetches async when clicked', () => {
    const wrapper = mount(Search)
    wrapper.find(SearchInput).vm.$emit('doSearch')
    //test?
    // wrapper.vm.$nextTick(() => {
    //   expect(wrapper.vm.imgList).toEqual([])
    //   //done()
    // })
  })
})
