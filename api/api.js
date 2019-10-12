const fs = require('fs')
const frontmatter = require('front-matter')

const POSTS_PATH = './content/wpisy'

function getPostAttributes(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf-8')

  const post = frontmatter(fileContent)
  return post.attributes
}

function getPosts() {
  const routesArray = []
  try {
    const years = fs.readdirSync(`${POSTS_PATH}`)
    years.forEach(year => {
      const months = fs.readdirSync(`${POSTS_PATH}/${year}`)
      months.forEach(month => {
        const days = fs.readdirSync(`${POSTS_PATH}/${year}/${month}`)
        days.forEach(day => {
          const files = fs.readdirSync(`${POSTS_PATH}/${year}/${month}/${day}`)
          files.forEach(file => {
            const title = file.substr(0, file.lastIndexOf('.'))
            const route = `/kronika/${year}/${month}/${day}/${title}/`
            const fsRoute = `${POSTS_PATH}/${year}/${month}/${day}/${file}`

            const attributes = getPostAttributes(fsRoute)

            routesArray.push({
              year,
              month,
              day,
              title,
              attributes,
              file,
              fsRoute,
              route
            })
          })
        })
      })
    })
  } finally {
    return routesArray
  }
}

function createRoutesArray() {
  let posts = getPosts()
  return posts.map(post => post.route)
}

module.exports = {
  getPosts,
  createRoutesArray
}
