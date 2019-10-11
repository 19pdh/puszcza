let { getPosts } = require('../api/api')

let posts = getPosts()

posts = posts.map(({ year, month, day, title, route }) => {
    return {
        date: `${year}-${month}-${day}`,
        title,
        route
    }
})

console.log(posts)