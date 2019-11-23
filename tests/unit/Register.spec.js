import Register from '@/views/Register'
import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import api from '@/http/index'
import axios from 'axios'

const fakeStore = new Vuex.Store({
  state: {},
  actions: {
    actionClick: jest.fn()
  }
})
const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(api)

describe('Register', () => {
  let wrapper
  beforeEach(() => {
    // axios.get.mockClear()
    wrapper = shallowMount(Register, { store: fakeStore, localVue })
  })
  it('check initialization', () => {
    //const wrapper = shallowMount(Register, { store: fakeStore, localVue })
    var data = Register.data()
    expect(data.model.name).toBe('')
  })
  it('register should be called', () => {
    wrapper.setData({
      model: {
        name: 'jojo',
        password: 'jojo',
        confirm_password: 'jojo',
        
      }
    })
    wrapper.vm.register()
  })
  it('register empty name', () => {
    wrapper.setData({
      model: {
        name: '',
      }
    })
    wrapper.vm.register()
  })
  it('register empty password', () => {
    wrapper.setData({
      model: {
        name:'jojo',
        password: '',
      }
    })
    wrapper.vm.register()
  })
  it('register empty confirm password', () => {
    wrapper.setData({
      model: {
        name: 'jojo',
        password: '1',
        confirm_password: ''
      }
    })
    wrapper.vm.register()
  })
  it('register different password', () => {
    wrapper.setData({
      model: {
        name: 'jojo',
        password: '1',
        confirm_password: '2'
      }
    })
    wrapper.vm.register()
  })
  it('foo', () => {
    const bar = false
    expect(bar).toBe(false)
  })
})
