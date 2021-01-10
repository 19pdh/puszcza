import axios from 'axios'

import { apiUrl, parsePosts } from '~/api'
import PostList from './PostList'

export const getPosts = async (pageId) => {
  let { data } = await axios.get(`${apiUrl}/page/${pageId}.json`)
  return {
    posts: parsePosts(data.posts),
    next: data.next
  };
}

export default PostList
