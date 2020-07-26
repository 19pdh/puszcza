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
.webp .oboz-widget {
  background-image: url('/assets/oboz.webp');
}

.oboz-widget {
  width: 100%;

  padding: 160px 20%;

  background-image: url('/assets/oboz.jpg');
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
