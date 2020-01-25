<template>
  <div class="post-link">
    <a :href="route">
      <div>
        <div class="image" :style="`background-image: url('${image}')`" />
        <div class="post-container">
          <h4 class="post-title">{{ title }}</h4>
          <p class="post-description">{{ shortenedDescription }}...</p>
        </div>
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
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    route: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
      default: () => '/assets/og/default.jpg',
    },
  },
  computed: {
    shortenedDescription() {
      const first30Words = this.description.split(' ').slice(0, 30)
      return first30Words.join(' ')
    },
  },
}
</script>

<style scoped>
.post-link {
  margin: 20px;
  flex-basis: 410px;
  max-width: 410px;
  /* height: 250px; */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  background: #ffffff;
  text-align: left;
  transition: all 300ms ease-in-out;
}

.post-link:hover {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  transform: scale(1.02);
}

.post-link > a {
  text-decoration: none;
  height: 100%;
}

.post-link .post-container {
  padding: 20px;
  height: 100%;
  padding-top: 0;
}

.post-link .post-title {
  color: #181818;
  font-size: 1.3em;
}

.post-link .post-description {
  color: #484848;
  font-size: 0.9em;
}

.post-link .image {
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: inset 0px 0px 100px rgba(0, 0, 0, 0.25);
}
</style>
