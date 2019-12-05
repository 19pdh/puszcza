import { storiesOf } from '@storybook/vue'
import { routes } from './TheFooter.stories'

import TheHeader from './TheHeader'

const header = {
  routes,
  title: '19 PDH Puszcza',
  logo: '/assets/krajka-logo.svg'
}

const alwaysTop = () => ({
  template: `<div style="display:flex;flex-direction:column;min-height:100vh"><story/><div style="flex:1"></div></div>`
})

storiesOf('TheHeader', module)
  .addDecorator(alwaysTop)
  .add('default', () => {
    return {
      components: { TheHeader },
      template: `<the-header :routes="routes" :title="title" :logo="logo"/>`,
      data: () => header
    }
  })
