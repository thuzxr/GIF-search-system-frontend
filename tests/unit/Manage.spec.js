import Manage from '@/views/Manage'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import api from '@/http/index'
import ImgGallery from '@/components/ImgGallery.vue'
const fakeStore = new Vuex.Store({
  state: {},
  actions: {
    actionClick: jest.fn()
  }
})
const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(api)

describe('Manage', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(Manage, { store: fakeStore, localVue })
  })
  it('check initialization', () => {
    var data = Manage.data()
    expect(data.err).toBe(false)
  })
  it('clickImg should be called', () => {
    // const wrapper = shallowMount(Search, { store: fakeStore, localVue })
    const mockFn = jest.fn()
    wrapper.setMethods({
      'showModal': mockFn
    })
    let tmp = { name: '' }
    wrapper.find(ImgGallery).vm.$emit('clickImg', tmp)
    expect(wrapper.vm.modalImg).toBe(tmp)
  })
  it('showModal should be called', () => {
    wrapper.vm.showModal()
  })
  it('clear not approve should be called', () => {
    window.alert = jest.fn()
    wrapper.vm.clear()
  })
  it('clear approve should be called', () => {
    window.alert = jest.fn()
    wrapper.setData({
      imgList: [
        { name: '123' }, { name: '456' }]
    })
    wrapper.vm.clear(true)
  })
  it('remove not approve should be called', () => {
    wrapper.vm.remove()
  })
  it('remove approve should be called', () => {
    wrapper.vm.remove(true)
  })
})
