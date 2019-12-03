<template>
  <nav class="navbar" :class="{ 'menu-open': showMenu }">
    <div class="title">
      <img v-if="logo" class="logo" :src="logo" alt="ZHR" />
      <nuxt-link class="title-name" :class="{ margin: logo }" to="/">{{
        title
      }}</nuxt-link>
    </div>
    <div class="space"></div>
    <button @click="toggleMenu" class="menu-toggler">Menu</button>
    <ul class="links" :class="{ show: this.showMenu }" @click="toggleMenu">
      <!-- Loop for generating links -->
      <nav-link
        v-for="route in routes"
        :key="route.path"
        :link="route.path"
        :name="route.name"
      />
    </ul>
  </nav>
</template>

<script>
import NavLink from './NavLink'

export default {
  name: 'TheHeader',
  components: {
    NavLink
  },
  props: {
    routes: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    logo: {
      type: String,
      required: false,
      default: () => ''
    }
  },
  data: function() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style scoped>
.navbar {
  font-family: 'Roboto Slab', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #181818;

  box-sizing: border-box;
  width: 100%;
  height: 80px;

  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

  padding: 0 200px 0 200px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.space {
  flex: 1;
  max-width: 500px;
}

.title {
  font-size: 30px;
  flex-shrink: 0;

  display: flex;
}

.title-name {
  text-decoration: none;
  color: #181818;
  padding: 10px;
}

.title-name.margin {
  margin-left: 100px;
}

.links {
  display: flex;
  flex-direction: row;
  padding: 0;
}

.logo {
  position: absolute;
  top: 0;
  z-index: 1;
}

.menu-toggler {
  display: none;
}

@media (max-width: 1300px) {
  .navbar {
    padding: 0 50px 0 50px;
  }
}

@media (max-width: 900px) {
  .navbar.menu-open {
    box-shadow: none;
  }

  .title {
    font-size: 24px;
  }

  .links {
    position: absolute;
    /* width: 100vw; */

    margin-top: 80px;

    flex-direction: column;
    display: none;
  }

  .menu-toggler {
    display: block;
  }

  .links.show {
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    margin-bottom: 0;
    padding: 50px 10px;

    width: 100%;
    left: 0;
    top: 0;

    background: #fff;
  }

  .links.show li {
    padding: 2vh;
    font-size: 30px;
  }
}

@media (max-width: 500px) {
  .navbar {
    padding: 0 10px 0 10px;
  }

  .logo {
    width: 65px;
  }

  .title-name {
    font-size: 20px;
  }

  .title-name.margin {
    margin-left: 70px;
  }

  .links.show {
    height: calc(100% - 80px);
  }
}
</style>
