## PostList

This component creates a list of posts

### Usage

```html
<template>
  <post-list :posts="posts">
</template>

<script>
import PostList, { getPosts } from '~/components/Posts/PostList';

export default {
  components: { PostList },
  async asyncData() {
    return {
      posts: await getPosts()
    }
  }
}
</script>
```

Or by using the mixin

```html
<template>
  <post-list :posts="posts">
</template>

<script>
import PostList from '~/components/Posts/PostList';
import postListParentMixin from '~/components/Posts/PostList/parentMixin';

export default {
  components: { PostList },
  mixins: [postListParentMixin]
}
</script>
```
