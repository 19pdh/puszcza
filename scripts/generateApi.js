import fs from 'fs'
import k from '../api'

let posts = k.getPosts()

posts = posts.map(({ date, title, content, route }) => {
  const { year, month, day } = date
  const { description, meta } = content

  return {
    date: `${year}-${month}-${day}`,
    title,
    content: { description, meta },
    route
  }
})

posts.sort((a, b) => (a.route > b.route ? 1 : -1))

fs.writeFile('./dist/api/posts.json', JSON.stringify(posts), err =>
  err ? console.log(err) : null
)

fs.writeFile('./static/api/posts.json', JSON.stringify(posts), err =>
  err ? console.log(err) : null
)

console.log(posts)
