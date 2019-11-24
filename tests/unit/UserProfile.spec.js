import UserProfile from '@/views/UserProfile'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import api from '@/http/index'
import ArgonDashboard from '@/plugins/argon-dashboard'

const fakeStore = new Vuex.Store({
  state: {
    user: {},
    userInfo: {}
  },
  actions: {
    actionClick: jest.fn()
  }
})
const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(api)
localVue.use(ArgonDashboard)

describe('UserProfile', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(UserProfile, { store: fakeStore, localVue })
  })

  it('check initialization', () => {
    expect(wrapper.vm.model.birthday).toBe('')
  })
  it('submit should be called', () => {
    wrapper.vm.submit()
  })
  it('ComingSoon shoule be called', () => {
    wrapper.vm.ComingSoon()
  })
})
