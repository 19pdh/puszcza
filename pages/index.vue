<template>
  <div>
    <join-us />
    <konkurs-kulinarny />
    <div style="width: 100%; padding-top: 50px">
      <h1>Ostatnie wpisy z kroniki</h1>
      <post-list :posts="posts" :max="4" />
    </div>
    <oboz-widget />
    <facebook-feed />
  </div>
</template>

<script>
import JoinUs from '~/components/JoinUs.vue'
import FacebookFeed from '~/components/Facebook/FacebookFeed.vue'
import PostList from '~/components/Posts/PostList'
import ObozWidget from '~/components/ObozWidget'
import KonkursKulinarny from '~/components/KonkursKulinarny'
import postListParentMixin from '~/components/Posts/PostList/parentMixin'

export default {
  name: 'HomeView',
  components: { JoinUs, FacebookFeed, PostList, ObozWidget, KonkursKulinarny },
  mixins: [postListParentMixin],
}
</script>
