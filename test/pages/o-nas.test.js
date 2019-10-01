import { shallowMount } from '@vue/test-utils'
import Onas from '../../pages/o-nas'

describe('Onas', () => {
  // Now mount the component and you have the wrapper
  const wrapper = shallowMount(Onas)

  it('match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
