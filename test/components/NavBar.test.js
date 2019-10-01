import { shallowMount } from '@vue/test-utils'
import NavBar from '../../components/NavBar'

describe('NavBar', () => {
  // Now mount the component and you have the wrapper
  const wrapper = shallowMount(NavBar)

  wrapper.setProps({
    title: 'Title',
    routes: [
      {
        path: '/',
        name: 'Home'
      }
    ]
  })

  it('check title', () => {
    expect(wrapper.html()).toContain(
      '<nuxt-link to="/" class="title-name">Title</nuxt-link>'
    )
  })

  it('match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
