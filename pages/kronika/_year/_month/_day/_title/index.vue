<template>
  <div style="display: block">
    <div v-if="notFound">
      <h1>404</h1>
      <p>Nie znaleziono wpisu</p>
    </div>
    <section v-else class="article">
      <img
        v-if="attributes.image"
        :src="attributes.image"
        :alt="attributes.title"
        :title="attributes.title"
      />
      <article class="content">
        <h1 style="width:100%">{{title}}</h1>
        <div v-html="content" />
      </article>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

import { apiUrl } from '~/api'

export default {
  head() {
    if (!this.notFound && this.attributes) {
      return {
        meta: [
          {
            hid: 'og:title',
            property: 'og:title',
            content: this.title,
          },
          {
            hid: 'og:type',
            property: 'og:type',
            content: 'article',
          },
          {
            hid: 'og:article:author',
            property: 'og:article:author',
            content: this.author,
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: this.attributes.image,
          },
        ],
      }
    }
  },
  async asyncData({ params }) {
    const { year, month, day, title } = params
    const response = await axios
      .get(`${apiUrl}/posts/${year}/${month}/${day}/${title}.json`)
      .catch((err) => ({ notFound: true }))

    const post = response.data

    if (post === undefined) return { notFound: true }

    return {
      params,
      title: post.title,
      author: post.author,
      attributes: post.meta,
      content: post.content,
    }
  },
  data() {
    return {
      notFound: false,
    }
  },
}
</script>

<style>
.article {
  padding: 60px 80px;
  width: 100%;
  max-width: 1000px;
  flex: 1;
  z-index: -1;
  text-align: left;
  margin: auto;
}
.article img {
  width: 100%;
  /*border-radius: 5px;*/
  box-shadow: inset 0px 0px 100px rgba(0, 0, 0, 0.25);
}

.article h1 {
  font-size: 1.5em;
  letter-spacing: 0;
}

article.content {
  margin-top: 3ex;
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
