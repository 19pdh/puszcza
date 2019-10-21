import { storiesOf } from '@storybook/vue'
import { center } from '../../.storybook/decorators'

import FacebookFeed from './FacebookFeed'

storiesOf('FacebookFeed', module)
  .addDecorator(center)
  .add('default', () => {
    return {
      components: { FacebookFeed },
      template: `<facebook-feed />`
    }
  })
