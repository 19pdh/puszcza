<template>
  <div style="padding-top: 20px; max-width: 900px">
    <h2>Ostatnie wpisy</h2>
    <a href="rss.xml">
      <img alt="RSS" style="height: 1em" src="/assets/social/rss.svg">
      RSS
    </a>
    <post-list :posts="posts" :next="next" :max="8" />
    <google-drive-link
      text="Zobacz również e&#8209;książkę rozkazów"
      link="https://zhr.niedzwiedzinski.cyou/rozkazy/"
      style="margin: 60px 30px"
    />
  </div>
</template>

<script>
import PostList from '~/components/Posts/PostList'
import postListParentMixin from '~/components/Posts/PostList/parentMixin'
import GoogleDriveLink from '~/components/GoogleDriveLink'

export default {
  components: {
    PostList,
    GoogleDriveLink
  },
  mixins: [postListParentMixin]
}
</script>
