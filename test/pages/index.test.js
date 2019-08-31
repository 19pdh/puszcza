import { shallowMount } from '@vue/test-utils'
import index from '../../pages/index'

describe('index', () => {
  // Now mount the component and you have the wrapper
  const wrapper = shallowMount(index)

  it('match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
