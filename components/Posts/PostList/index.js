import axios from 'axios'

import k from '~/api'
import PostList from './PostList'

export const getPosts = async () => {
  let posts = await axios.get(
    `https://feature-json-api--puszcza.netlify.com/api/posts.json`
  )
  return parsePosts(posts.data)
}

export const parsePosts = (posts) =>
  posts.map((post) => ({
    title: post.title,
    image: post.image,
    description: post.description,
    route: post.path,
    meta: post.meta,
  }))

export default PostList
