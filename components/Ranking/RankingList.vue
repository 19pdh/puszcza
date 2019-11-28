<template>
  <ol class="ranking-list">
    <ranking-first-entry
      :troop="sortedScores[0].troop"
      :points="sortedScores[0].points"
    />
    <ranking-entry
      v-for="score in sortedScores.slice(1)"
      :key="score.troop"
      :troop="score.troop"
      :points="score.points"
    />
  </ol>
</template>

<script>
import RankingFirstEntry from './RankingFirstEntry'
import RankingEntry from './RankingEntry'

function compare(a, b) {
  return b.points - a.points
}

export default {
  name: 'RankingList',
  components: {
    RankingEntry,
    RankingFirstEntry
  },
  props: {
    scores: {
      type: Array, //i.e. [{troop: "Troop 1", points: 12}, {troop: "Troop 2", points: 22}]
      required: true
    }
  },
  computed: {
    sortedScores() {
      return [...this.scores].sort(compare)
    }
  }
}
</script>

<style scoped>
.ranking-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 0;
  padding-inline-start: 0;

  width: 100%;
  max-width: 300px;
  margin: 10px;
}
</style>
