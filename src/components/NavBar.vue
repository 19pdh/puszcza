<template>
  <nav class="navbar">
    <div class="title">
      <img v-if="logo" class="logo" :src="logo" />
      <router-link class="title-name" to="/">{{ title }}</router-link>
    </div>
    <div class="space"></div>
    <button @click="toggleMenu" class="menu-toggler">Menu</button>
    <div class="links">
      <!-- Loop for generating links -->
      <NavLink v-for="route in routes" :key="route.path" :link="route.path" :name="route.name"></NavLink>
      <NavLink
        v-for="route in externalRoutes"
        :key="route.path"
        :link="route.path"
        :name="route.name"
        :external="true"
      ></NavLink>
    </div>
  </nav>
</template>

<script>
import NavLink from "./NavLink.vue";

export default {
  components: {
    NavLink
  },
  props: {
    routes: Array,
    externalRoutes: Array,
    title: String,
    logo: String
  },
  data: function() {
    return {
      menuCollapsed: true
    };
  },
  methods: {
    toggleMenu() {
      console.log("a");
      this.menuCollapsed = !this.menuCollapsed;
    }
  }
};
</script>

<style scoped>
.navbar {
  font-family: "Roboto Slab", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #181818;

  box-sizing: border-box;
  width: 100vw;
  height: 80px;

  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

  padding: 0 200px 0 200px;

  display: flex;
  align-items: center;
}

.space {
  flex: 1;
}

.title {
  font-size: 30px;
  flex-shrink: 0;

  display: flex;
}

.title-name {
  margin-left: 120px;
  text-decoration: none;
  color: #181818;
  padding: 10px;
}

.links {
  display: flex;
  flex-direction: row;
}

.logo {
  position: absolute;
  top: 0;
}

.menu-toggler {
  display: none;
}

.show {
  display: block !important;
}

@media (max-width: 1300px) {
  .navbar {
    padding: 0 50px 0 50px;
  }
}

@media (max-width: 900px) {
  .title {
    font-size: 24px;
  }

  .links {
    background-color: #ffffff;

    position: absolute;
    /* width: 100vw; */

    margin-top: 80px;

    flex-direction: column;
    display: none;
  }

  .menu-toggler {
    display: block;
  }
}
</style>