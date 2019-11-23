// import Vue from 'vue'
import Search from '@/views/Search'
import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import SearchInput from '@/components/SearchInput'
import Vuex from 'vuex'
import api from '@/http/index'

import axios from 'axios'

// import mockAxios from '../__mocks__/axios'
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
  // beforeEach(() => {
  //   axios.get.mockClear()
  // })
  // 检查原始组件选项
  it('has a data hook', () => {
    // const wrapper = factory()
    const wrapper = shallowMount(Search, { store: fakeStore, localVue })
    expect(typeof Search.data).toBe('function')
    var data = Search.data()
    // expect(data.err).toBe(false)
    expect(data.imgList.length).toBe(0)
    expect(wrapper.vm.err).toBe(false)
  })
  it('axios.get Fn should be called', () => {
    window.alert = jest.fn()
    const wrapper = shallowMount(Search, { store: fakeStore, localVue })

    wrapper.find(SearchInput).vm.$emit('doSearch', 'haha')
    // expect(axios.create).toBeCalledWith('')
    expect(axios.create).toHaveBeenCalled()
    // expect(axios.create().get).toBeCalledWith('')
    // expect(axios.get).toBeCalledWith('https://www.baidu.com')
    // expect(axios_.search).toBeCalledWith("")
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
    const wrapper = shallowMount(Search, { store: fakeStore, localVue })

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
    // test?
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
    const wrapper = mount(Search)
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
