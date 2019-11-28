import { shallowMount } from '@vue/test-utils'
import JoinUs from '../../components/JoinUs'

describe('JoinUs', () => {
  // Now mount the component and you have the wrapper
  const wrapper = shallowMount(JoinUs)

  it('match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
