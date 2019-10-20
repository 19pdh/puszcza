<template>
  <nav :class="navbarClass">
    <div class="title">
      <img v-if="logo" class="logo" :src="logo" alt="ZHR" />
      <nuxt-link :class="titleClass" to="/">{{ title }}</nuxt-link>
    </div>
    <div class="space"></div>

    <div @click="toggleMenu" class="menu-toggler">
      <img class="ham-menu" :src="ham_menu" alt="Hamburger menu">
    </div>

    <!-- <button @click="toggleMenu" class="menu-toggler">Menu</button> -->
    <ul :class="linksClass" @click="toggleMenu">
      <!-- Loop for generating links -->
      <NavLink v-for="route in routes" :key="route.path" :link="route.path" :name="route.name"></NavLink>
      <NavLink
        v-for="route in externalRoutes"
        :key="route.path"
        :link="route.path"
        :name="route.name"
        :external="true"
      ></NavLink>
    </ul>
  </nav>
</template>

<script>
import NavLink from './NavLink'

export default {
  components: {
    NavLink
  },
  props: {
    routes: Array,
    externalRoutes: Array,
    title: String,
    logo: String,
    ham_menu: String
  },
  computed: {
    titleClass() {
      if (this.logo) {
        return 'title-name margin'
      }
      return 'title-name'
    },
    navbarClass() {
      if (this.menuCollapsed) {
        return 'navbar'
      }
      return 'navbar menu-open'
    },
    linksClass() {
      if (this.menuCollapsed) {
        return 'links'
      }
      return 'links show'
    }
  },
  data: function() {
    return {
      menuCollapsed: true
    }
  },
  methods: {
    toggleMenu() {
      this.menuCollapsed = !this.menuCollapsed
    },
    linksClick() {
      this.toggleMenu()
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

  .ham-menu {
    width: 40px;
    height: 40%;
  }


  .links.show {
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 0;
    padding: 50px 0;

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