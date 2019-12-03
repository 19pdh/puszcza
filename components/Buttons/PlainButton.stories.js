import { storiesOf } from '@storybook/vue'
import { center } from '../../.storybook/decorators'

import PlainButton from './PlainButton'

const plainButton = {
  text: 'Plain Button'
}

storiesOf('Buttons/PlainButton', module)
  .addDecorator(center)
  .add('default', () => {
    return {
      components: { PlainButton },
      template: `<plain-button :text="text" />`,
      data: () => plainButton
    }
  })
