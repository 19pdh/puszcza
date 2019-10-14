const fs = require('fs')
const frontmatter = require('front-matter')
const md = require('markdown-it')()
const { JSDOM } = require('jsdom')

const POSTS_PATH = './content/wpisy'

function getPostAttributes(fileContent) {
  const post = frontmatter(fileContent)

  const { document } = new JSDOM(`<body>${md.render(post.body)}</body>`).window
  const element = document.getElementsByTagName('p')

  post.body = `<div>${md.render(post.body)}</div>`
  post.description = element[1].textContent

  return post
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

            const data = getPostAttributes(fs.readFileSync(fsRoute, 'utf-8'))

            routesArray.push({
              year,
              month,
              day,
              title,
              data,
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
  createRoutesArray,
  getPostAttributes
}
