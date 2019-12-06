<template>
  <div class="footer" :style="style">
    <div class="map">
      <div class="routes">
        <nuxt-link v-for="route in routes" :key="route.name" :to="route.path">{{route.name}}</nuxt-link>
      </div>
      <div class="routes">
        <nuxt-link v-for="route in specialRoutes" :key="route.name" :to="route.path">{{route.name}}</nuxt-link>
      </div>
    </div>
    <div class="space"></div>
    <div class="author">
      <p>19 Poznańska Drużyna Harcerzy Puszcza</p>
      <div class="social">
        <a href="https://github.com/19pdh/" target="_blank" rel="”noopener”">
          <img class="icon" src="/assets/social/github.png" alt="Github" />
        </a>
        <a href="https://www.facebook.com/19pdhpuszcza/" target="_blank" rel="”noopener”">
          <img class="icon" src="/assets/social/facebook.png" alt="Facebook" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',
  props: {
    routes: Array,
    specialRoutes: Array,
    color: {
      type: String,
      default: '#507b34'
    }
  },
  computed: {
    style() {
      return `background-color: ${this.color}`
    }
  }
}
</script>

<style scoped>
.footer {
  color: #ffffff;
  min-height: 175px;
  width: 100%;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  padding: 0 15vw;
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

.icon {
  width: 30px;
  height: 30px;

  margin: 0 5px;
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
    margin-bottom: 10px;
  }

  .space {
    height: 1px;
    width: 100%;
    flex: none;
    background-color: #ffffff;
  }

  .author {
    margin-top: 10px;
  }
}
</style>