import { mount } from '@vue/test-utils'
import Search from '@/views/Search.vue'

describe('Search.vue', () => {
  const wrapper = mount(Search)
  it('renders props.msg when passed', () => {
    expect(wrapper.html()).toContain('搜索')
  })
})
