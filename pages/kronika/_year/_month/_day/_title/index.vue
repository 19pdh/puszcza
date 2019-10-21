<template>
  <div>
    <div v-if="notFound">
      <h1>404</h1>
      <p>Nie znaleziono wpisu</p>
    </div>
    <div v-else class="article">
      <article class="content" v-html="content"></article>
    </div>
  </div>
</template>

<script>
const md = require('markdown-it')()
import frontmatter from 'front-matter'
import k from '~/api'

export default {
  head() {
    return {
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.attributes.title
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article'
        },
        {
          hid: 'og:article:author',
          property: 'og:article:author',
          content: this.attributes.author
        }
      ]
    }
  },
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
  padding: 60px 80px;
  width: 100%;
  max-width: 1000px;
  flex: 1;
  background: #ffffff;
  z-index: -1;
  text-align: left;
}
.article img {
  width: 100%;
  border-radius: 5px;
}
@media (max-width: 720px) {
  .article {
    padding: 60px 20px;
  }
  .article p {
    text-align: justify;
  }
}
</style>