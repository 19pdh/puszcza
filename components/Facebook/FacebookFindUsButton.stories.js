import { storiesOf } from '@storybook/vue'
import { center } from '../../.storybook/decorators'

import FacebookFindUsButton from './FacebookFindUsButton'

storiesOf('Facebook/FacebookFindUsButton', module)
  .addDecorator(center)
  .add('default', () => {
    return {
      components: { FacebookFindUsButton },
      template: `<facebook-find-us-button />`
    }
  })
