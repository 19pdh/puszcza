<template>
  <div style="max-width: 900px">
    <h1>Punktacja</h1>
    <ranking-list v-if="scores" :scores="scores" />
    <p v-else>Loading...</p>
  </div>
</template>

<script>
import RankingList from '~/components/Ranking/RankingList'

export default {
  components: {
    RankingList
  },
  data() {
    return {
      scores: undefined
    }
  },
  mounted() {
    this.getScores()
  },
  methods: {
    getScores() {
      this.scores = [
        { troop: 'Toop 1', points: 1 },
        { troop: 'Troop 2', points: 2 }
      ]
    }
  }
}
</script>
