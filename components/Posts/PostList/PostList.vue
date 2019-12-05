<template>
  <pure-post-list v-if="posts" :posts="parsedPosts" :loading="loading" />
</template>

<script>
import PurePostList from './PurePostList'

export default {
  name: 'PostList',
  components: { PurePostList },
  props: {
    max: {
      type: Number,
      required: false,
      default: () => 4
    },
    posts: {
      type: Array,
      required: false
    }
  },
  computed: {
    parsedPosts() {
      if (this.max) {
        return this.posts.slice(0, this.max)
      }
      return this.posts
    },
    loading() {
      return this.posts === undefined
    }
  }
}
</script>
