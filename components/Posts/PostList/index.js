import axios from 'axios'

import k from '~/api'
import PostList from './PostList'

export const getPosts = async () => {
  if (process.client) {
    let posts = await axios.get(`${window.location.origin}/api/posts.json`)
    return parsePosts(posts.data)
  } else {
    return parsePosts(k.getPosts())
  }
}

export const parsePosts = posts =>
  posts.map(post => ({
    title: post.content.meta.title,
    description: post.content.description,
    route: post.route
  }))

export default PostList
