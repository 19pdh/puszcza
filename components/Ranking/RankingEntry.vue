<template>
  <li class="ranking-entry">
    <div class="ranking-entry__troop">{{ troop }}</div>
    <div class="ranking-entry__points">{{ points }}</div>
  </li>
</template>

<script>
export default {
  name: 'RankingEntry',
  props: {
    troop: {
      type: String,
      required: true
    },
    points: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
.ranking-entry {
  min-width: 200px;
  list-style: none;

  margin: 5px;
  padding: 10px 20px;

  border: 2px solid #efefef;

  display: grid;
  grid-template-columns: 0% 80% 20%;

  font-size: 16px;
}

.ranking-entry div {
  display: inline-block;
}

.ranking-entry__troop {
  text-align: left;
  grid-column: 2;
}

.ranking-entry__points {
  grid-column: 3;
}
</style>
