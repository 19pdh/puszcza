<template>
  <div>
    <join-us />
    <div style="width: 100%; padding-top: 50px">
      <h1>Ostatnie wpisy z kroniki</h1>
      <post-list :posts="posts" :max="4" />
    </div>
    <facebook-feed />
  </div>
</template>

<script>
import JoinUs from '~/components/JoinUs.vue'
import FacebookFeed from '~/components/Facebook/FacebookFeed.vue'
import PostList from '~/components/Posts/PostList'
import postListParentMixin from '~/components/Posts/PostList/parentMixin'

export default {
  name: 'HomeView',
  components: { JoinUs, FacebookFeed, PostList },
  mixins: [postListParentMixin]
}
</script>
