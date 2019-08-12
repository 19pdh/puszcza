<template>
  <li>
    <router-link v-bind:to="link">{{ name }}</router-link>
  </li>
</template>

<script>
export default {
  props: {
    link: String,
    name: String
  }
};
</script>