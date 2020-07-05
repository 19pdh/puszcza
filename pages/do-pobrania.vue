<template>
  <div class="container">
    <h1>Do pobrania</h1>
    <a
      v-for="{ file, title } in files"
      :key="file"
      class="link"
      :href="`/files/${file}`"
    >
      {{ title }}
    </a>
    <a class="link" href="http://sprawnosci.zhr.pl/">
      Książeczka sprawności 🆕
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: [
        {
          file: 'Karta_próby_na_sprawność.pdf',
          title: 'Karta próby na sprawność'
        },
        { file: 'Próba_Harcerza.pdf', title: 'Próba Harcerza' },
        { file: 'Książeczka_sprawności.pdf', title: 'Stara książeczka sprawności' }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.link {
  margin: 5px;
}
</style>
