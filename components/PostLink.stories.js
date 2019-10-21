import { storiesOf } from '@storybook/vue'

import PostLink from './PostLink'

export const postLink = {
  title: 'Test PostLink',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar non ex non sagittis. Quisque in enim tellus. Aliquam consequat mi id sapien congue, sit amet vulputate tortor viverra. Donec.',
  route: '/kronika/2019/20/11/test'
}

const center = () => {
  return {
    template:
      '<div style="display: flex; align-items: center; justify-content: center"><story/></div>'
  }
}

storiesOf('PostLink', module)
  .addDecorator(center)
  .add('default', () => {
    return {
      components: { PostLink },
      template: `<post-link :title="title" :description="description" :route="route"/>`,
      data: () => postLink
    }
  })
