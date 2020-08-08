<template>
  <div style="padding-top: 20px; max-width: 900px">
    <h2>Ostatnie wpisy</h2>
    <post-list :posts="posts" max="8" />
    <google-drive-link
      text="Zobacz również e&#8209;książkę rozkazów"
      link="https://drive.google.com/drive/folders/1LWH4yYXpaa8kapBa2UAZTKnAAgXOHQYo?usp=sharing"
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
