import { shallowMount } from '@vue/test-utils'
import FacebookFeed from '../../components/FacebookFeed'

describe('FacebookFeed', () => {
  // Now mount the component and you have the wrapper
  const wrapper = shallowMount(FacebookFeed)

  it('match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
