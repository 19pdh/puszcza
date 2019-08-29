<template>
  <div id="app">
    <NavBar
      :routes="routes"
      :externalRoutes="externalRoutes"
      title="19 PDH Puszcza"
      logo="assets/krajka-logo.svg"
    />
    <router-view id="content"></router-view>
    <Footer :routes="routes" :specialRoutes="specialRoutes" />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

import { routes, externalRoutes } from "./router/index";

export default {
  name: "app",
  components: { NavBar, Footer },
  data() {
    return {
      routes,
      externalRoutes: [],
      specialRoutes: [
        // {
        //   name: 'Akcja "Ratujmy pszczoły"',
        //   path: "/ratujmy-pszczoly"
        // }
      ]
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

* {
  box-sizing: border-box;
}

#app {
  font-family: "Roboto Slab", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #181818;
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
