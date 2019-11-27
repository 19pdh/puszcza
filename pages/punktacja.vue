<template>
  <div style="max-width: 900px">
    <h1>Punktacja</h1>
    <ranking-list v-if="scores" :scores="scores" />
    <p v-else>Loading...</p>
  </div>
</template>

<script>
import RankingList from '~/components/Ranking/RankingList'

const FAUNA_KEY = 'fnADeP_U0uACC4Hruw9JvjexNsvB-V-QjI3wr8yH'
const b64encodedSecret = Buffer.from(FAUNA_KEY + ':').toString('base64')
const FAUNA_REF = '250230903625744898'

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
