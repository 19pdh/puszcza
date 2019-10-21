import { storiesOf } from '@storybook/vue'
import { center } from '../../.storybook/decorators'

import { postLink } from '../PostLink.stories'

import PurePostList from './PurePostList'

export const posts = Array(5).fill(postLink)
console.log(posts)

storiesOf('PurePostList', module)
  .addDecorator(center)
  .add('default', () => {
    return {
      components: { PurePostList },
      template: `<pure-post-list :posts="posts"/>`,
      data: () => ({ posts })
    }
  })
  .add('loading', () => {
    return {
      components: { PurePostList },
      template: `<pure-post-list :posts="posts" loading/>`
    }
  })
  .add('no posts', () => {
    return {
      components: { PurePostList },
      template: `<pure-post-list :posts="posts"/>`
    }
  })
