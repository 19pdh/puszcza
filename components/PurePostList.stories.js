import { storiesOf } from '@storybook/vue'

import { postLink } from './PostLink.stories'

import PurePostList from './PurePostList'

export const posts = Array(5).fill(postLink)
console.log(posts)

storiesOf('PurePostList', module).add('default', () => {
  return {
    components: { PurePostList },
    template: `<pure-post-list :posts="posts"/>`,
    data: () => ({ posts })
  }
})
