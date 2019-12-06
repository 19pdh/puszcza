import { storiesOf } from '@storybook/vue'
import { center } from '../.storybook/decorators'

import NavLink from './NavLink'

const navLink = {
  name: 'Test',
  link: '/test'
}

storiesOf('NavLink', module)
  .addDecorator(center)
  .add('default', () => {
    return {
      components: { NavLink },
      template: `<nav-link :name="name" :link="link" />`,
      data: () => navLink
    }
  })
