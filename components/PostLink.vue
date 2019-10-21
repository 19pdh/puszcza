<template>
  <div class="post-link">
    <a :href="route">
      <div class="post-container">
        <h4 class="post-title">{{title}}</h4>
        <p class="post-description">{{shortenedDescription}}...</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'PostLink',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    route: {
      type: String,
      required: true
    }
  },
  computed: {
    shortenedDescription() {
      const first30Words = this.description.split(' ').slice(0, 30)
      return first30Words.join(' ')
    }
  }
}
</script>

<style scoped>
.post-link {
  margin: 20px;
  flex-basis: 410px;
  max-width: 410px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  background: #ffffff;
  text-align: left;
}

.post-link > a {
  text-decoration: none;
}

.post-link .post-container {
  padding: 20px;
}

.post-link .post-title {
  color: #181818;
  font-size: 1.3em;
}

.post-link .post-description {
  color: #484848;
  font-size: 0.9em;
}
</style>