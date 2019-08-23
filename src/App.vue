<template>
  <div id="app">
    <NavBar :routes="routes" :externalRoutes="externalRoutes" title="19 PDH Puszcza" />
    <!-- logo="assets/krajka-logo.svg" -->
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import { routes, externalRoutes } from "./router/index";

export default {
  name: "app",
  components: { NavBar },
  data() {
    return {
      routes,
      externalRoutes: []
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap");

html,
body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: "Roboto Slab", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #181818;
  text-align: center;

  display: flex;
  flex-direction: column;
}
</style>
