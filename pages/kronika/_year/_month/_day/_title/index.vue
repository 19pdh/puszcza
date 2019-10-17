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
import k from '~/api'

export default {
  async asyncData({ params }) {
    const { year, month, day, title } = params
    const post = k.getPost(year, month, day, title)

    if (post === undefined) return { notFound: true }

    return {
      params,
      attributes: post.content.meta,
      content: post.content.html
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