<template>
  <section class="feed">
    <h1>Zobacz co się dzieje!</h1>
    <FacebookFindUsButton />
  </section>
</template>

<script>
import FacebookFindUsButton from "./FacebookFindUsButton.vue";

export default {
  components: {
    FacebookFindUsButton
  },
  props: {
    pageId: String
  }
};
</script>

<style scoped>
.feed {
  margin: 50px 0;
}
</style>