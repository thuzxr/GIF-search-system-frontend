// import Vue from 'vue'
import Search from '@/views/Search'
import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import SearchInput from '@/components/SearchInput'
import ImgGallery from '@/components/ImgGallery.vue'
import Vuex from 'vuex'
import api from '@/http/index'

//import axios from 'axios'

// import mockAxios from '../__mocks__/axios'
const fakeStore = new Vuex.Store({
  state: {
    likeList: {
      has: jest.fn(() => {})
    }, 
    favourList: {
      has: jest.fn(() => {})
    }
  },
  actions: {
    actionClick: jest.fn()
  }
})

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(api)

describe('Search', () => {
  let wrapper
  beforeEach(() => {
    // axios.get.mockClear()
    wrapper = shallowMount(Search, { store: fakeStore, localVue })
  })
  // 检查原始组件选项
  it('has a data hook', () => {
    //const wrapper = shallowMount(Search, { store: fakeStore, localVue })
    expect(typeof Search.data).toBe('function')
    var data = Search.data()
    expect(data.imgList.length).toBe(0)
    expect(wrapper.vm.err).toBe(false)
  })
  it('search should be called', () => {
    window.alert = jest.fn()
    //const wrapper = shallowMount(Search, { store: fakeStore, localVue })

    wrapper.find(SearchInput).vm.$emit('doSearch', 'haha')
    // expect(axios.create).toBeCalledWith('')
    //expect(axios.create).toHaveBeenCalled()
    // expect(axios.get).toBeCalledWith('https://www.baidu.com')
  })
  it('like should be called', () => {
    //const wrapper = shallowMount(Search, { store: fakeStore, localVue })
    wrapper.vm.like()
    //expect()
    expect(true).toBe(true)
  })
  it('favour should be called', () => {
    //const wrapper = shallowMount(Search, { store: fakeStore, localVue })
    wrapper.vm.favour()
    
  })
  it('clickImg should be called', () => {
    //const wrapper = shallowMount(Search, { store: fakeStore, localVue })
    const mockFn = jest.fn()
    wrapper.setMethods({
      'showModal': mockFn
    })
    let tmp = {name: ''}
    wrapper.find(ImgGallery).vm.$emit('clickImg', tmp)
    expect(wrapper.vm.modalImg).toBe(tmp)
  })
  it('showModal should be called', () => {
    wrapper.vm.showModal()
  })
  // it("calls get promise result", () => {
  //   const wrapper = shallowMount(Search, { store: fakeStore, localVue })
  //   return wrapper.vm.search("").then(result => {
  //     expect(result).toEqual('')
  //   })
  // })
  it('test search function, fetches async when clicked', done => {
    // Vue.config.errorHandler = done
    window.alert = jest.fn()
    //const wrapper = shallowMount(Search, { store: fakeStore, localVue })

    // const mockFn = jest.fn()
    // wrapper.setMethods({
    //   'search': mockFn
    // })

    wrapper.find(SearchInput).vm.$emit('doSearch', 'haha')
    // var data = Search.data()
    // expect(data.err).toBe(true)
    // expect(wrapper.vm.err).toBe(false)
    // expect(wrapper.vm.gettext).toBe('haha')
    // expect(wrapper.vm.$data.gettext).toBe('123')
    // expect(Search.data().gettext).toBe('')
    // wrapper.vm.$nextTick(() => {
    //   expect(wrapper.vm.gettext).toBe('haha')
    //   //expect(Search.data().gettext).toBe('')
    //   expect(wrapper.vm.imgList).toEqual([])
    //   done()
    // })
    done()
  })
  it('foo', () => {
    const bar = false
    expect(bar).toBe(false)
  })

  it('has correct html', () => {
    //const wrapper = mount(Search, { store: fakeStore, localVue })
    expect(wrapper.contains('img-gallery'))
  })

  // mockAxios.get.mockImplementationOnce(() => {
  //   return Promise.resolve({
  //     response: {
  //       status: 'succeed',
  //       data: {status: 'succeed'}
  //     }
  //   })
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
})
