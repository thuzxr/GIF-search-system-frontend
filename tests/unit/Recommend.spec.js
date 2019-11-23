import Recommend from '@/views/Recommend'
import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import api from '@/http/index'

const fakeStore = new Vuex.Store({
  state: {},
  actions: {
    actionClick: jest.fn()
  }
})
const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(api)

describe('Recommend', () => {
  let wrapper
  beforeEach(() => {
    // axios.get.mockClear()
    wrapper = shallowMount(Recommend, { store: fakeStore, localVue })
  })
  it('check initialization', () => {
    expect(wrapper.vm.imgList.length).toBe(0)
  })

  it('test get recomment function', () => {
    const wrapper = mount(Recommend, { store: fakeStore, localVue })
    wrapper.find('base-button').trigger('click')

    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.imgList).toEqual([])
    })
  })
  it('foo', () => {
    const bar = false
    expect(bar).toBe(false)
  })
})
