import { getPosts } from './index'

export default {
  async asyncData() {
    return {
      posts: await getPosts(),
    }
  },
}
