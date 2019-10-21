<template>
  <div style="padding-top: 20px">
    <h2>Ostatnie wpisy</h2>
    <post-list />
  </div>
</template>

<script>
import PostList from '~/components/PostList'

export default {
  components: {
    PostList
  }
}
</script>

