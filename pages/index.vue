<template>
  <div>
    <join-us />
    <div style="width: 100%; padding-top: 50px">
      <h1>Ostatnie wpisy z kroniki</h1>
      <post-list :max="4" />
    </div>
    <facebook-feed />
  </div>
</template>

<script>
import JoinUs from '~/components/JoinUs.vue'
import FacebookFeed from '~/components/Facebook/FacebookFeed.vue'
import PostList from '~/components/PostList'

export default {
  name: 'HomeView',
  components: { JoinUs, FacebookFeed, PostList }
}
</script>