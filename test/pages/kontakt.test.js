import { shallowMount } from '@vue/test-utils'
import kontakt from '../../pages/kontakt'

describe('kontakt', () => {
  // Now mount the component and you have the wrapper
  const wrapper = shallowMount(kontakt)

  it('match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
