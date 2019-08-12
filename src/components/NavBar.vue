<template>
  <nav class="navbar">
    <div class="title">
      <img class="logo" src="../assets/krajka-logo.svg" />
      <NavLink class="title-name" link="/" name="19 PDH Puszcza"></NavLink>
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
import { routes, externalRoutes } from "../router/index";

export default {
  components: {
    NavLink
  },
  data: function() {
    return {
      routes,
      externalRoutes,
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