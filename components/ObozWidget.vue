<template>
  <section class="oboz-widget">
    <nuxt-link to="/oboz/2020">
      <img src="/assets/oboz.svg" />
    </nuxt-link>
  </section>
</template>

<script>
export default {
  name: 'ObozWidget'
}
</script>

<style scoped>
.oboz-widget {
  width: 100%;

  margin-top: 50px;
  padding: 80px 20%;

  background-image: url('/assets/oboz.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: row;
  justify-content: center;
}

img {
  max-width: 60vmin;
  transition: all 1s ease-in-out;
}

img:hover {
  transform: scale(1.1);
}

@media (max-width: 500px) {
  .oboz-widget {
    padding: 80px 20px;
  }
}
</style>
