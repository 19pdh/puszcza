import { shallowMount } from '@vue/test-utils'
import Footer from '../../components/Footer'

describe('Footer', () => {
  // Now mount the component and you have the wrapper
  const wrapper = shallowMount(Footer)

  wrapper.setProps({
    routes: [
      {
        path: '/',
        name: 'Home'
      }
    ]
  })

  it('match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
