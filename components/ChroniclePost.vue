<template>
  <a :href="route" class="post">
    <div>
      <h4 class="post-title">{{title}}</h4>
      <p class="post-description">{{shortenedDescription}}...</p>
    </div>
  </a>
</template>

<script>
export default {
  name: 'ChroniclePost',
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
.post {
  margin: 20px;
  flex-basis: 410px;
  text-decoration: none;
}

.post > div {
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  padding: 20px;

  text-align: left;
}

.post-title {
  color: #181818;
  font-size: 1.3em;
}

.post-description {
  color: #484848;
  font-size: 0.9em;
}
</style>