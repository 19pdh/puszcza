export const apiUrl = 'https://feature-json-api--puszcza.netlify.com/api'

export const parsePosts = (posts) =>
  posts.map((post) => ({
    title: post.title,
    image: post.image,
    description: post.description,
    route: post.path,
    meta: post.meta,
  }))
