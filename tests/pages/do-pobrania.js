import { shallowMount } from '@vue/test-utils'
import doPobrania from '../../pages/do-pobrania'

describe('doPobrania', () => {
  // Now mount the component and you have the wrapper
  const wrapper = shallowMount(doPobrania)

  it('match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})