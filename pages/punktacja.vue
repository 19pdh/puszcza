<template>
  <div style="max-width: 900px">
    <h1>Punktacja</h1>
    <ranking-list v-if="scores" :scores="scores" />
    <p v-else>Loading...</p>
    <ranking-rules />
  </div>
</template>

<script>
import RankingList from '~/components/Ranking/RankingList'
import RankingRules from '~/components/Ranking/RankingRules'

const FAUNA_KEY = 'fnADeP_U0uACC4Hruw9JvjexNsvB-V-QjI3wr8yH'
const b64encodedSecret = Buffer.from(FAUNA_KEY + ':').toString('base64')
const query = `
{
    getPoints{data {points troop{name}}}
}`
const URL = 'https://graphql.fauna.com/graphql'
const FETCH_OPTIONS = {
  method: 'POST',
  headers: {
    Authorization: `Basic ${b64encodedSecret}`
  },
  body: JSON.stringify({ query })
}

export default {
  components: {
    RankingList,
    RankingRules
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
    async getScores() {
      const r = await fetch(URL, FETCH_OPTIONS)
      const { data } = await r.json()
      this.scores = data.getPoints.data.map(({ points, troop }) => ({
        troop: troop.name,
        points
      }))
    }
  }
}
</script>
