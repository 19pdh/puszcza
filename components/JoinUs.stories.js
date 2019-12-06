import { storiesOf } from '@storybook/vue'
import { center } from '../.storybook/decorators'

import JoinUs from './JoinUs'

const joinUs = {}

storiesOf('JoinUs', module)
  .addDecorator(center)
  .add('default', () => {
    return {
      components: { JoinUs },
      template: `<join-us />`,
      data: () => joinUs
    }
  })
