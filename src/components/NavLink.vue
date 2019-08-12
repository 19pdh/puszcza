<template>
  <li class="navlink">
    <a v-if="external" class="link" target="_blank" :href="link">{{name}}</a>
    <router-link v-else class="link" :to="link">{{ name }}</router-link>
  </li>
</template>

<script>
export default {
  props: {
    link: String,
    name: String,
    external: { type: Boolean, default: false }
  }
};
</script>

<style scoped>
.link {
  text-decoration: none;
  color: #181818;
}

.navlink {
  list-style-type: none;

  padding: 10px;
  margin: 10px;
}

@media (max-width: 1300px) {
  .navlink {
    margin: 0;
  }
}
</style>