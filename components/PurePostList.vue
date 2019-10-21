<template>
  <div>
    <div v-if="posts" class="post-list">
      <post-link
        v-for="(post, index) in posts"
        :key="index"
        :route="post.route"
        :title="post.title"
        :description="post.description"
      />
    </div>
    <div v-else>Brak wpisów</div>
  </div>
</template>

<script>
import PostLink from './PostLink'

export default {
  name: 'PurePostList',
  components: { PostLink },
  props: {
    posts: {
      type: Array,
      required: true
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