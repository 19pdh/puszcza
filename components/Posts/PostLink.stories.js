import { storiesOf } from '@storybook/vue'
import { center } from '../../.storybook/decorators'

import PostLink from './PostLink'

export const postLink = {
  title: 'Test PostLink',
  author: 'Tester',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar non ex non sagittis. Quisque in enim tellus. Aliquam consequat mi id sapien congue, sit amet vulputate tortor viverra. Donec.',
  route: '/kronika/2019/20/11/test',
  meta: {
    image:
      'https://images.unsplash.com/photo-1573145881456-0708c72340ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  },
}

storiesOf('Posts/PostLink', module)
  .addDecorator(center)
  .add('default', () => {
    return {
      components: { PostLink },
      template: `<post-link :title="title" :description="description" :route="route"/>`,
      data: () => postLink,
    }
  })
  .add('with image', () => {
    return {
      components: { PostLink },
      template: `<post-link :title="title" :description="description" :route="route" :image="meta.image"/>`,
      data: () => postLink,
    }
  })
