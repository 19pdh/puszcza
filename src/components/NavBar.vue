<template>
  <nav class="navbar">
    <div class="title">
      <NavLink link="/" name="19 PDH Puszcza"></NavLink>
    </div>
    <div class="space"></div>
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
      externalRoutes
    };
  }
};
</script>

<style scoped>
.navbar {
  width: 100vw;
  height: 80px;

  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
}

.space {
  flex: 1;
}

.title {
  font-size: 30px;
  margin-left: 200px;
  flex-shrink: 0;
}

.links {
  display: flex;
  margin-right: 200px;
}
</style>