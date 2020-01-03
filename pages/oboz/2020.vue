<template>
  <section class="oboz">
    <h1>Obóz 2020</h1>
    <p>W tym roku obóz odbędzie się nad jeziorem Sporym</p>
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Jezioro%20Spore&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.oboz {
  margin-top: 40px;
}

h1 {
  font-size: 2em;
}

.mapouter,
.gmap_canvas,
#gmap_canvas {
  width: 100%;
  height: 50vh;
  max-height: 300px;
}
</style>
