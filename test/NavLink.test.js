import { mount } from '@vue/test-utils'
import NavLink from '../components/NavLink'

describe('NavLink', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(NavLink)

  wrapper.setProps({ link: '/link', name: 'Link' })

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain(
      `<li class="navlink"><nuxt-link class="link" to="/link">Link</nuxt-link></li>`
    )
  })
})
