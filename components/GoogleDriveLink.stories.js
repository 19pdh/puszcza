import { storiesOf } from '@storybook/vue'
import { center } from '../.storybook/decorators'

import GoogleDriveLink from './GoogleDriveLink'

const googleDriveLink = {
  text: 'Test',
  link: 'https://drive.google.com/u/1'
}

storiesOf('GoogleDriveLink', module)
  .addDecorator(center)
  .add('default', () => {
    return {
      components: { GoogleDriveLink },
      template: `<google-drive-link :text="text" :link="link" />`,
      data: () => googleDriveLink
    }
  })
