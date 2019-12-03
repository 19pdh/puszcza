<template>
  <pure-post-list v-if="rawPosts" :posts="posts" :loading="loading" />
</template>

<script>
import k from '~/api'
import PurePostList from './PurePostList'

export default {
  name: 'PostList',
  components: { PurePostList },
  props: {
    max: {
      type: Number,
      required: false
    }
  },
  data() {
    return {
      loading: true,
      rawPosts: undefined
    }
  },
  mounted() {
    if (process.client && this.rawPosts === undefined) {
      this.loadPostsClient()
    } else {
      this.rawPosts = k.getPosts()
      this.loading = false
    }
  },
  computed: {
    posts() {
      if (this.max) {
        return this.rawPosts.slice(0, this.max)
      }
      return this.rawPosts
    }
  },
  methods: {
    async loadPostsClient() {
      let posts = await this.$axios.get(
        `${window.location.origin}/api/posts.json`
      )
      this.rawPosts = posts.data
      this.rawPosts = this.rawPosts.map(post => ({
        title: post.content.meta.title,
        description: post.content.description,
        route: post.route
      }))
      this.loading = false
    }
  }
}
</script>
