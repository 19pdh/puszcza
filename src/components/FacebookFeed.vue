<template>
  <section class="feed">
    <h1>Ostatnie wpisy</h1>
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
  },
  created() {
    window.fbAsyncInit = function() {
      FB.init({
        appId: "702203580219306",
        autoLogAppEvents: true,
        xfbml: true,
        version: "v4.0"
      });

      FB.api(`/${this.pageId}/feed`, function(response) {
        if (response && !response.error) {
          console.log(response);
        }
      });
    };
  }
};
</script>

<style scoped>
.feed {
  margin: 50px 0;
}
</style>