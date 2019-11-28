import { shallowMount } from '@vue/test-utils'
import page404 from '../../pages/404'

describe('404', () => {
  // Now mount the component and you have the wrapper
  const wrapper = shallowMount(page404)

  it('match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
