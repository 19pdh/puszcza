const fs = require('fs')

let { getPosts } = require('../api/api')

let posts = getPosts()

posts = posts.map(({ year, month, day, title, attributes, route }) => {
    return {
        date: `${year}-${month}-${day}`,
        title,
        attributes,
        route
    }
})

fs.writeFile('./dist/api/posts.json', JSON.stringify(posts), (err) => err ? console.log(err) : null)
console.log(posts)
