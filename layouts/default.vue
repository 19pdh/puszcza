<template>
  <div id="app">
    <NavBar :routes="routes" title="19 PDH Puszcza" logo="/assets/krajka-logo.svg" />
    <nuxt id="content" :key="$route.path" />
    <Footer :routes="routes" />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'app',
  components: { NavBar, Footer },
  data() {
    return {
      routes: [
        { path: '/', name: 'Strona główna' },
        { path: '/download', name: 'Do pobrania' },
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

#content {
  flex: 1;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
