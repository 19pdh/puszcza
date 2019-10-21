<template>
  <div class="post-list">
    <div v-if="loading" class="post-list-container">
      <div class="loading-post" v-for="(_, index) in 4" :key="index"></div>
    </div>
    <div v-else-if="posts" class="post-list-container">
      <post-link
        v-for="(post, index) in posts"
        :key="index"
        :route="post.route"
        :title="post.title"
        :description="post.description"
      />
    </div>
    <div v-else class="no-posts">Brak wpisów</div>
  </div>
</template>

<script>
import PostLink from '../PostLink'

export default {
  name: 'PurePostList',
  components: { PostLink },
  props: {
    posts: {
      type: Array,
      required: true
    },
    loading: {
      type: Boolean,
      required: false,
      default: () => false
    }
  }
}
</script>

<style scoped>
.post-list {
  width: 100%;
  max-width: 900px;
  justify-content: center;
  margin: 0 auto;
}

.post-list-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: initial;
}

@keyframes loading {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.loading-post {
  background: #efefef;
  animation: loading 1.5s ease-in-out infinite;
  margin: 20px;
  flex-basis: 410px;
  width: 410px;
  height: 250px;
  text-align: left;
}

.no-posts {
  text-align: center;
}
</style>