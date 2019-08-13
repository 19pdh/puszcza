<template>
  <li class="navlink">
    <a v-if="external" :class="linkClass" target="_blank" :href="link">{{ name }}</a>
    <router-link v-else :class="linkClass" :to="link">{{ name }}</router-link>
  </li>
</template>

<script>
export default {
  props: {
    link: String,
    name: String,
    external: { type: Boolean, default: false },
    active: { type: Boolean, default: false }
  },
  computed: {
    linkClass() {
      if (this.active) {
        return "link active";
      }
      return "link";
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap");

.link {
  font-family: "Roboto Slab", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

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

.active {
  background-color: #ececec !important;
}

@media (max-width: 1300px) {
  .navlink {
    margin: 0;
  }
}
</style>