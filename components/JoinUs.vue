<template>
  <section class="joinus">
    <div class="heading">
      <div class="title">
        <div class="text">Rozpocznij swoją harcerską przygodę!</div>
      </div>
      <plain-button @click="$router.push('/kontakt')" text="Dołącz do nas" />
    </div>
  </section>
</template>

<script>
import PlainButton from './Buttons/PlainButton'

export default {
  name: 'JoinUs',
  components: {
    PlainButton
  }
}
</script>

<style scoped>
.joinus {
  width: 100%;

  padding: 80px 20%;

  background-image: url('/assets/bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: row;
  justify-content: center;
}

.heading {
  width: 900px;
  padding: 50px 0 150px 0;

  display: flex;
  flex-direction: column;
}

.title {
  background-color: #340c0e;
  color: #ffffff;

  width: 260px;
  height: 85px;
  margin-bottom: 20px;

  text-align: left;
}

.title .text {
  margin: 0;
  padding: 10px;
  font-size: 24px;
}

.button {
  background-color: #507b34;
  padding: 10px;
  max-width: 150px;
  color: #ffffff;
  text-align: center;
}

.button a {
  text-decoration: none;
}

@media (max-width: 500px) {
  .heading {
    margin: 0;
    align-items: center;
  }

  .joinus {
    padding: 80px 20px;
  }
}
</style>