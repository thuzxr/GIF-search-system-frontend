import Favourites from '@/views/Favourites'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import ImgGallery from '@/components/ImgGallery.vue'
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

describe('Favourites', () => {
  let wrapper
  beforeEach(() => {
    // axios.get.mockClear()
    wrapper = shallowMount(Favourites, { store: fakeStore, localVue })
  })

  it('check initialization', () => {
    expect(wrapper.vm.err).toBe(false)
  })

  it('clickImg should be called', () => {
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
  it('clear should be called', () => {
    window.alert = jest.fn()
    wrapper.vm.clear()
  })
  it('remove should be called', () => {
    wrapper.vm.remove()
  })
})
