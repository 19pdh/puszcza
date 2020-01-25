<template>
  <section class="oboz">
    <div class="header">
      <div class="logo">
        <img src="/assets/2020.svg" alt="" />
        <h1>Obóz 2020</h1>
      </div>
      <div class="troops">
        <h3>19 PDH Puszcza</h3>
        <h3>7 PDH Binduga</h3>
        <h3>7 PDH Watra</h3>
      </div>
    </div>
    <day-countdown text="Do obozu zostało:" :end-date="new Date(2020, 6, 7)" />
    <camp-map
      src="https://maps.google.com/maps?q=Jezioro%20Spore&t=&z=13&ie=UTF8&iwloc=&output=embed"
    />
    <h3 style="margin-top: 10vh">Tutaj niedługo znajdziesz relacje z obozu</h3>
    <pure-post-list loading :posts="[]" style="margin-bottom: 30px" />
  </section>
</template>

<script>
import PurePostList from '~/components/Posts/PostList/PurePostList'
import DayCountdown from '~/components/DayCountdown'
import CampMap from '~/components/CampMap'
export default {
  components: {
    PurePostList,
    DayCountdown,
    CampMap,
  },
}
</script>

<style scoped>
.oboz {
  position: relative;
}
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
  margin-top: -4px;
}

.troops {
  display: flex;
  flex-direction: row;
}

.troops h3 {
  margin: 10px;
}

@media (max-width: 480px) {
  .troops {
    flex-direction: column;
  }

  .logo img {
    width: 100px;
  }

  h1 {
    font-size: 2em;
  }
}

.oboz::after {
  width: 100px;
  height: 200px;
  background: url('/assets/fether.svg');
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  bottom: 0;
  right: 5%;
}

@media (min-width: 750px) {
  .oboz::after {
    content: '';
  }
}

@media (min-width: 910px) {
  .oboz::after {
    content: none;
  }
}

@media (min-width: 1210px) {
  .oboz::after {
    content: '';
  }
}
</style>
