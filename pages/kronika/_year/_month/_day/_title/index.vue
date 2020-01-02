<template>
  <div>
    <div v-if="notFound">
      <h1>404</h1>
      <p>Nie znaleziono wpisu</p>
    </div>
    <section v-else class="article">
      <article class="content" v-html="content"></article>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  head() {
    if (this.attributes) {
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
    }
  },
  async asyncData({ params }) {
    const { year, month, day, title } = params
    const response = await axios
      .get(
        `${process.env.baseUrl}/api/posts/${year}/${month}/${day}/${title}.json`
      )
      .catch(err => ({ notFound: true }))

    const post = response.data

    if (post === undefined) return { notFound: true }

    return {
      params,
      attributes: post.meta,
      content: post.content
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

.article h1 {
  font-size: 1.5em;
  letter-spacing: 0;
}

@media (max-width: 720px) {
  .article {
    padding: 60px 20px;
  }
  .article p {
    text-align: justify;
  }
  .article h1 {
    font-size: 1.7em;
    font-weight: 700;
  }
}
</style>
