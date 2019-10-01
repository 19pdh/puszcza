import { shallowMount } from '@vue/test-utils'
import FacebookFindUsButton from '../../components/FacebookFindUsButton'

describe('FacebookFindUsButton', () => {
  // Now mount the component and you have the wrapper
  const wrapper = shallowMount(FacebookFindUsButton)

  it('match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
