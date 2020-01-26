<template>
  <div style="width: 100%">
    <h3 style="margin: 10vh 10vmin 0 10vmin">
      Tutaj niedługo znajdziesz relację z obozu
    </h3>
    <pure-post-list loading :posts="[]" style="margin-bottom: 30px" />
  </div>
</template>

<script>
import PurePostList from '~/components/Posts/PostList/PurePostList'

export default {
  name: 'EmptyCampStory',
  components: {
    PurePostList,
  },
}
</script>
