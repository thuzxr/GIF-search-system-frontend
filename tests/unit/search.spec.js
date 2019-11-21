import Vue from 'vue'
import Search from '@/views/Search'
import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import SearchInput from '@/components/SearchInput'
import Vuex from 'vuex'
import api from '@/http/index'

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
const fakeStore = new Vuex.Store({
  state: {},
  actions: {
    actionClick: jest.fn()
  }
})
const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(api)

describe('Search', () => {
  // 检查原始组件选项
  it('has a data hook', () => {
    // const wrapper = factory()
    const wrapper = shallowMount(Search, { store: fakeStore, localVue })
    expect(typeof Search.data).toBe('function')
    var data = Search.data()
    expect(data.err).toBe(false)
    expect(data.imgList.length).toBe(0)
  })

  // it('has correct html', () => {
  //   const wrapper = mount(Search)
  //   expect(wrapper.contains('img-gallery'))
  // })

  // it('correctly sets the message when created', () => {
  //   const vm = new Vue(Search).$mount()
  //   expect(vm.err).toBe(false)
  //   expect(vm.imgList.length).toBe(0)
  // })

  // it('renders an error when there is no return gif', () => {
  //   const wrapper = mount(Search, {
  //     data () {
  //       return {
  //         err: false
  //       }
        
  //     }
  //   })
  //   wrapper.setData({err: false});
  //   // 组件状态wrapper.setProps({})
  //   expect(wrapper.contains('h2')).toBe(true)// ???
  //   expect(wrapper.html()).toContain('Oops! 找不到你想要的Gif')
  // })

  it('test search function, fetches async when clicked', () => {
    window.alert = jest.fn();
    const wrapper = mount(Search, { store: fakeStore, localVue })
    wrapper.find(SearchInput).vm.$emit('doSearch')

    //test?
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.imgList).toEqual([])
      //done()
    })
  })
  it('foo', () => {
    const bar = false
    expect(bar).toBe(false)
  })

})
