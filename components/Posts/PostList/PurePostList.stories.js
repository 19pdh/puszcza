import { storiesOf } from '@storybook/vue'

import { postLink } from '../PostLink.stories'

import PurePostList from './PurePostList'

const postLinkNoImage = { ...postLink }
delete postLinkNoImage['image']
console.log(postLinkNoImage)

export const posts = [
  ...Array(3).fill(postLinkNoImage),
  ...Array(5).fill(postLink),
]

storiesOf('Posts/PurePostList', module)
  .add('default', () => {
    return {
      components: { PurePostList },
      template: `<pure-post-list :posts="posts"/>`,
      data: () => ({ posts }),
    }
  })
  .add('loading', () => {
    return {
      components: { PurePostList },
      template: `<pure-post-list :posts="posts" loading/>`,
      data: () => ({ posts: [] }),
    }
  })
  .add('no posts', () => {
    return {
      components: { PurePostList },
      template: `<pure-post-list :posts="posts"/>`,
      data: () => ({ posts: [] }),
    }
  })
