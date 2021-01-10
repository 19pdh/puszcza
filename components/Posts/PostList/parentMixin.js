import { getPosts } from './index'

export default {
  async asyncData({ query }) {
    let page = query.page || 1;
    const data = await getPosts(page);
    return data;
  },
  watchQuery: true
}
