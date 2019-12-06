<template>
  <div style="padding-top: 20px">
    <h2>Ostatnie wpisy</h2>
    <post-list :posts="posts" />
  </div>
</template>

<script>
import PostList from '~/components/Posts/PostList'
import postListParentMixin from '~/components/Posts/PostList/parentMixin'

export default {
  components: {
    PostList
  },
  mixins: [postListParentMixin]
}
</script>
