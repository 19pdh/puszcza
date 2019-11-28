<template>
  <div style="padding-top: 20px">
    <h2>Ostatnie wpisy</h2>
    <div class="post-list">
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
      posts: k.getPosts()
    }
  },
  mounted() {
    this.getPosts()
  },
  methods: {
    getPosts() {
      if (this.posts.length < 1) {
        this.$axios
          .get(`${window.location.origin}/api/posts.json`)
          .then(r => (this.posts = r.data))
      }
      console.log(this.posts)
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