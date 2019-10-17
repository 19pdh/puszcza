<template>
  <div style="padding-top: 20px">
    <h2>Ostatnie wpisy</h2>
    <a v-for="(post, index) in posts" :key="index" :href="post.route">{{post.content.meta.title}}</a>
  </div>
</template>

<script>
import k from '~/api'

export default {
  async asyncData() {
    return {
      posts: k.getPosts()
    }
  }
}
</script>