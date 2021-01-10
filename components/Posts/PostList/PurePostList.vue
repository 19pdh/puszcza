<template>
  <div class="post-list">
    <div v-if="loading" class="post-list-container loading">
      <div class="loading-post" v-for="(_, index) in 4" :key="index"></div>
    </div>
    <div v-else-if="!posts" class="no-posts">Brak wpisów</div>
    <transition name="fade-in">
      <div v-if="posts && !loading" class="post-list-container">
        <post-link
          v-for="(post, index) in posts"
          :key="index"
          :route="post.route"
          :title="post.title"
          :description="post.description"
          :image="post.meta.image"
        />
        <nuxt-link :to="`?page=${next}`" v-if="next">
          <plain-button class="next-link" text="Wcześniejsze wpisy"/>
        </nuxt-link>
      </div>
    </transition>
  </div>
</template>

<script>
import PostLink from '../PostLink'
import PlainButton from '../../Buttons/PlainButton.vue';

export default {
  name: 'PurePostList',
  components: { PostLink, PlainButton },
  props: {
    posts: {
      type: Array,
      required: true,
    },
    next: {
      type: Number,
      required: false,
    },
    loading: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },
}
</script>

<style scoped>
.post-list {
  width: 100%;
  max-width: 900px;
  justify-content: center;
  margin: 15px auto;
}

.post-list-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

@media (max-width: 920px) {
  .post-list-container.loading div:nth-child(1),
  .post-list-container.loading div:nth-child(2) {
    display: none;
  }
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

.next-link {
  margin: 2em 0;
  padding: 1em;
  max-width: 100%;
}

@keyframes fade-in {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.fade-in-enter-active {
  animation: fade-in 0.3s reverse;
}
</style>
