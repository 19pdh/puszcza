<template>
  <li class="ranking-first-entry">
    <img class="crown" src="/assets/crown.svg" />
    <div class="ranking-first-entry__troop">{{ troop }}</div>
    <div class="ranking-first-entry__points">{{ points }}</div>
  </li>
</template>

<script>
export default {
  name: 'RankingFirstEntry',
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
.ranking-first-entry {
  list-style: none;
  padding: 10px 20px;
  margin: 10px;
  width: 100%;

  display: grid;
  grid-template-columns: 15% 60% 25%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);

  line-height: 50px;
  font-size: 26px;
  font-weight: 600;
}

.crown {
  margin: auto;
}

.ranking-first-entry__troop {
  grid-column: 2;
}

.ranking-first-entry__points {
  grid-column: 3;
}
</style>
