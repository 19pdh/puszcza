<template>
  <div class="mapouter">
    <div class="gmap_canvas">
      <iframe
        id="gmap_canvas"
        :src="src"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CampMap',
  props: {
    src: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
.mapouter,
.gmap_canvas,
#gmap_canvas {
  width: 100%;
  height: 50vh;
  max-height: 300px;
}
</style>
