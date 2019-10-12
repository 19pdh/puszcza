<template>
  <div>
    <div v-if="notFound">
      <h1>404</h1>
      <p>Nie znaleziono wpisu</p>
    </div>
    <div v-else class="article">
      <!-- <h1>{{ params.title }}</h1>
      <span>{{ `${params.year}-${params.month}-${params.day}` }}</span>-->
      <div class="content" v-html="content"></div>
    </div>
  </div>
</template>

<script>
const md = require('markdown-it')()
import frontmatter from 'front-matter'

export default {
  async asyncData({ params }) {
    console.log(params)
    const fileContent = await import(
      `~/content/wpisy/${params.year}/${params.month}/${
        params.day
      }/${params.title.toLowerCase()}.md`
    ).catch(e => console.log(e))

    if (fileContent === undefined) return { notFound: true }

    let post = frontmatter(fileContent.default)
    console.log(post.attributes)
    return {
      params,
      attributes: post.attributes,
      content: md.render(post.body)
    }
  },
  data() {
    return {
      notFound: false
    }
  }
}
</script>

<style>
.article {
  padding: 20px 80px 20px 80px;
  width: 100%;
  max-width: 1000px;
  flex: 1;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  z-index: -1;
}
.article img {
  width: 100%;
  border-radius: 5px;
}
@media (max-width: 720px) {
  .article {
    padding: 20px 40px 20px 40px;
  }
}
</style>