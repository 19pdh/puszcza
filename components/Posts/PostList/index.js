import axios from 'axios'

import { apiUrl, parsePosts } from '~/api'
import PostList from './PostList'

export const getPosts = async () => {
  let posts = await axios.get(`${apiUrl}/posts.json`)
  return parsePosts(posts.data)
}

export default PostList
