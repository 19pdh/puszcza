import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import TheFooter from './TheFooter'

export const routes = [
  { path: '/', name: 'Strona główna' },
  { path: '/download', name: 'Do pobrania' },
  { path: '/kontakt', name: 'Kontakt' },
  { path: '/kronika', name: 'Kronika' }
]

const footer = {
  routes
}

const alwaysBottom = () => ({
  template: `<div style="display:flex;flex-direction:column;min-height:100vh"><div style="flex:1"></div><story/></div>`
})

storiesOf('TheFooter', module)
  .addDecorator(alwaysBottom)
  .add('default', () => {
    return {
      components: { TheFooter },
      template: `<the-footer :routes="routes" />`,
      data: () => footer
    }
  })
