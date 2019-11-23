import Login from '@/views/Login'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import api from '@/http/index'
import ArgonDashboard from '@/plugins/argon-dashboard'
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
localVue.use(ArgonDashboard)
describe('Login', () => {
  let wrapper
  beforeEach(() => {
    // axios.get.mockClear()
    wrapper = shallowMount(Login, { store: fakeStore, localVue })
  })

  it('check initialization', () => {
    expect(wrapper.vm.model.name.length).toBe(0)
  })
  it('login should be called', () => {
    wrapper.setData({
      model: {
        name: 'jojo',
        password: 'jojo'
      }

    })
    wrapper.vm.login()
  })
  it('login empty name', () => {
    wrapper.setData({
      model: {
        name: '',
        password: 'jojo'
      }

    })
    wrapper.vm.login()
  })
  it('login empty name', () => {
    wrapper.setData({
      model: {
        name: 'jojo',
        password: ''
      }

    })
    wrapper.vm.login()
  })
})
