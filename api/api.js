const fs = require('fs')

const POSTS_PATH = './kronika/wpisy'

function getPosts() {
  const routesArray = []
  try {
    const years = fs.readdirSync(`${POSTS_PATH}`)
    years.forEach((year) => {
      const months = fs.readdirSync(`${POSTS_PATH}/${year}`)
      months.forEach((month) => {
        const days = fs.readdirSync(`${POSTS_PATH}/${year}/${month}`)
        days.forEach((day) => {
          const files = fs.readdirSync(`${POSTS_PATH}/${year}/${month}/${day}`)
          files.forEach((file) => {
            const title = file.substr(0, file.lastIndexOf('.'))
            const route = `/kronika/${year}/${month}/${day}/${name}`
            const fsRoute = `${POSTS_PATH}/${year}/${month}/${day}/${file}`
            routesArray.push({
              year,
              month,
              day,
              title,
              file,
              fsRoute,
              route
            })
          })
        })
      })
    })
  }
  finally {
    console.log(routesArray)
    return routesArray
  }
}

function createRoutesArray() {
  let posts = getPosts()
  return posts.map(post => post.route)
}

createRoutesArray()

module.exports = {
  getPosts,
  createRoutesArray
}