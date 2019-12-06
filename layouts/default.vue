<template>
  <div id="app">
    <the-header
      :routes="routes"
      title="19 PDH Puszcza"
      logo="/assets/krajka-logo.svg"
    />
    <main class="content">
      <nuxt class="content" />
    </main>
    <the-footer :routes="routes" />
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'

export default {
  name: 'app',
  components: { TheHeader, TheFooter },
  data() {
    return {
      routes: [
        { path: '/', name: 'Strona główna' },
        { path: '/do-pobrania', name: 'Do pobrania' },
        { path: '/kontakt', name: 'Kontakt' },
        { path: '/kronika', name: 'Kronika' }
      ]
    }
  }
}
</script>

<style>
#app {
  text-align: center;
  align-items: center;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
