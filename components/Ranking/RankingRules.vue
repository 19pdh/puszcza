<template>
  <div>
    <h2>Zasady punktacji</h2>
    <div class="rules" v-html="rules"></div>
  </div>
</template>

<script>
import rules from '~/assets/zasady-punktacji.md'

const md = require('markdown-it')()

export default {
  name: 'RankingRules',
  data() {
    return {
      rules: md.render(rules)
    }
  }
}
</script>

<style>
.rules table {
  border-collapse: collapse;
  margin: 20px 10px;
}

.rules th,
.rules td {
  padding: 5px 15px;
  border: 1px solid #000;
}
</style>
