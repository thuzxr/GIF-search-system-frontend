import Theme from '@/views/Theme'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import api from '@/http/index'

const fakeStore = new Vuex.Store({
  state: {

  },
  actions: {
    actionClick: jest.fn()
  }
})

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(api)

describe('Theme', () => {
  let wrapper
  beforeEach(() => {
    // axios.get.mockClear()
    wrapper = shallowMount(Theme, { store: fakeStore, localVue })
  })

  it('check initialization', () => {
    // expect(wrapper.vm.value).toBe(0.5)
    var data = Theme.data()
    expect(data.value).toBe(0.5)
  })
  it('change should be called', () => {
    wrapper.vm.change()
  })
  it('setvalue should be called', () => {
    wrapper.vm.setvalue()
  })
  it('setSearchType shoule be called', () => {
    wrapper.vm.setSearchType()
  })
  it('setRandType should be called', () => {
    wrapper.vm.setRankType()
  })
})
