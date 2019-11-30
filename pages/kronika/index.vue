<template>
  <div style="padding-top: 20px">
    <h2>Ostatnie wpisy</h2>
    <div v-if="posts" class="post-list">
      <chronicle-post
        v-for="(post, index) in posts"
        :key="index"
        :route="post.route"
        :title="post.content.meta.title"
        :description="post.content.description"
      />
    </div>
  </div>
</template>

<script>
import ChroniclePost from '~/components/ChroniclePost'
import k from '~/api'

export default {
  components: {
    ChroniclePost
  },
  async asyncData() {
    return {
      posts: process.client ? undefined : k.getPosts()
    }
  },
  mounted() {
    if (process.client && this.posts === undefined) {
      this.getPosts().then(posts => (this.posts = posts))
    }
  },
  methods: {
    async getPosts() {
      const r = await this.$axios.get(
        `${window.location.origin}/api/posts.json`
      )
      return r.data
    }
  }
}
</script>

<style scoped>
.post-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 900px;
}
</style>