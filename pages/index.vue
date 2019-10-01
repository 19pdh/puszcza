<template>
  <div>
    <JoinUs />
    <FacebookFeed />
  </div>
</template>

<script>
import JoinUs from "../components/JoinUs.vue";
import FacebookFeed from "../components/FacebookFeed.vue";

export default {
  name: "HomeView",
  components: { JoinUs, FacebookFeed }
};
</script>