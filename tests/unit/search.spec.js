import { mount } from '@vue/test-utils'
import Search from '@/views/Search.vue'

describe('Search.vue', () => {
  const wrapper = mount(Search)
  it('renders img div when passed', () => {
    expect(wrapper.contains('el-input')).toBe(true)
    expect(wrapper.contains('el-button')).toBe(true)
    expect(wrapper.contains('img')).toBe(true)
    wrapper.vm.search()
  })
})
