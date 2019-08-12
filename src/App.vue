<template>
  <div id="app">
    <nav>
      <NavLink link="/" name="Home"></NavLink>
      <NavLink link="/gallery" name="Galeria"></NavLink>
      <NavLink link="/download" name="Do pobrania"></NavLink>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import NavLink from "./components/NavLink";

export default {
  name: "app",
  components: { NavLink }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap");

#app {
  font-family: "Roboto Slab", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #181818;
  margin-top: 60px;
}
</style>
