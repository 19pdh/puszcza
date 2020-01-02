import fs from 'fs'
import k from '../api'
import path from 'path'

function mkDirByPathSync(targetDir, { isRelativeToScript = false } = {}) {
  const sep = path.sep
  const initDir = path.isAbsolute(targetDir) ? sep : ''
  const baseDir = isRelativeToScript ? __dirname : '.'

  return targetDir.split(sep).reduce((parentDir, childDir) => {
    const curDir = path.resolve(baseDir, parentDir, childDir)
    try {
      fs.mkdirSync(curDir)
    } catch (err) {
      if (err.code === 'EEXIST') {
        // curDir already exists!
        return curDir
      }

      // To avoid `EISDIR` error on Mac and `EACCES`-->`ENOENT` and `EPERM` on Windows.
      if (err.code === 'ENOENT') {
        // Throw the original parentDir error on curDir `ENOENT` failure.
        throw new Error(`EACCES: permission denied, mkdir '${parentDir}'`)
      }

      const caughtErr = ['EACCES', 'EPERM', 'EISDIR'].indexOf(err.code) > -1
      if (!caughtErr || (caughtErr && targetDir === curDir)) {
        throw err // Throw if it's just the last created dir.
      }
    }

    return curDir
  }, initDir)
}

let posts = k.getPosts()

posts.forEach(post => {
  const { year, month, day } = post.date
  const dir = `api/posts/${year}/${month}/${day}`
  mkDirByPathSync(`./dist/${dir}`)
  mkDirByPathSync(`./static/${dir}`)
  console.log(`${dir}/${post.title}.json`)
  const apiEntry = {
    title: post.title,
    date: `${year}-${month}-${day}`,
    content: post.content.html,
    meta: post.content.meta
  }
  fs.writeFile(
    `./dist/${dir}/${post.title}.json`,
    JSON.stringify(apiEntry),
    err => (err ? console.log(err) : null)
  )
  fs.writeFile(
    `./static/${dir}/${post.title}.json`,
    JSON.stringify(apiEntry),
    err => (err ? console.log(err) : null)
  )
})

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

fs.writeFile('./dist/api/posts.json', JSON.stringify(posts), err =>
  err ? console.log(err) : null
)

fs.writeFile('./static/api/posts.json', JSON.stringify(posts), err =>
  err ? console.log(err) : null
)

console.log(posts)
