<template>
  <div class="footer">
    <div class="map">
      <div class="routes">
        <router-link v-for="route in routes" :key="route.name" :to="route.path">{{route.name}}</router-link>
      </div>
      <div class="routes">
        <router-link
          v-for="route in specialRoutes"
          :key="route.name"
          :to="route.path"
        >{{route.name}}</router-link>
      </div>
    </div>
    <div class="space"></div>
    <div>19 Poznańska Drużyna Harcerzy Puszcza</div>
  </div>
</template>

<script>
export default {
  props: {
    routes: Array,
    specialRoutes: Array
  }
};
</script>

<style scoped>
.footer {
  background-color: #507b34;
  color: #ffffff;
  height: 175px;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  padding: 0 15vw 0 15vw;
}

.map {
  display: flex;
  flex-direction: row;

  text-align: left;

  /* margin-right: 100px; */
}

.map a {
  text-decoration: none;
  color: #ffffff;
  margin: 5px;
}

.routes {
  display: flex;
  flex-direction: column;
}

.space {
  flex: 1;
  max-width: 500px;
}

@media (max-width: 900px) {
  .footer {
    padding: 20px 10vw 20px 10vw;
    flex-direction: column;

    justify-content: center;
  }

  .map {
    text-align: center;
  }
}
</style>