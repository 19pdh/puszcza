<template>
  <section class="oboz">
    <div class="header">
      <h1>Obóz 2020</h1>
      <div class="troops">
        <h3>19 PDH Puszcza</h3>
        <h3>7 PDH Binduga</h3>
        <h3>7 PDH Watra</h3>
      </div>
    </div>
    <div class="countdown">
      Do obozu zostało: <span>{{ days }} dni</span>
    </div>
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
    <h3 style="margin-top: 10vh">Tutaj niedługo znajdziesz relacje z obozu</h3>
    <pure-post-list loading />
  </section>
</template>

<script>
import PurePostList from '~/components/Posts/PostList/PurePostList'
export default {
  components: {
    PurePostList
  },
  computed: {
    days() {
      let now = new Date(Date.now())
      let oboz = new Date(2020, 7, 6)
      return Math.round((oboz.getTime() - now.getTime()) / 86400000)
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10vmax 0 5vmax 0;
}

h1 {
  font-size: 3em;
  background: black;
  color: white;
  padding: 0.25em 0.75em;
  width: max-content;
}

.troops {
  display: flex;
  flex-direction: row;
}

.troops h3 {
  margin: 10px;
}

.countdown {
  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 50px 10px;
}

.countdown span {
  font-weight: 600;
}

@media (max-width: 480px) {
  .troops {
    flex-direction: column;
  }
}

.mapouter,
.gmap_canvas,
#gmap_canvas {
  width: 100%;
  height: 50vh;
  max-height: 300px;
}
</style>
