<template>
  <li class="navlink">
    <a v-if="external" class="link" target="_blank" rel="”noopener”" :href="link">{{ name }}</a>
    <a v-else-if="pure" class="link" :href="link">{{ name }}</a>
    <nuxt-link v-else class="link" :to="link">{{ name }}</nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    external: {
      type: Boolean,
      default: false
    },
    pure: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap');

.link {
  font-family: 'Roboto Slab', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;

  text-decoration: none;
  color: #181818;

  padding: 10px;

  border-radius: 5px;
}

.link:hover {
  background-color: #cfcfcf;
}

.navlink {
  list-style-type: none;

  margin: 10px;
}

.nuxt-link-exact-active {
  background-color: #ececec !important;
}

@media (min-width: 900px) {
  .link {
    font-weight: normal;
  }
}

@media (max-width: 1300px) {
  .navlink {
    margin: 0;
  }
}
</style>