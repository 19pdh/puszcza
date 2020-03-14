<template>
  <section>
    <img src="/assets/konkurs-kulinarny/chef_hat.svg" />
    <h1>Konkurs Kulinarny</h1>
    <plain-button @click="$router.push('/konkurs-kulinarny')" text="Przejdź" />
  </section>
</template>

<script>
import PlainButton from './Buttons/PlainButton'

export default {
  name: 'KonkursKulinarny',
  components: {
    PlainButton,
  },
}
</script>

<style scoped>
h1 {
  letter-spacing: 0.175em;
  text-transform: uppercase;
  margin: 1.5em 0;
}

section {
  margin: 80px 0;
  font-size: 1.5em;
}
</style>
