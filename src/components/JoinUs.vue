<template>
  <section class="joinus">
    <div class="heading">
      <div class="title">
        <div class="text">Rozpocznij swoją harcerską przygodę!</div>
      </div>
      <div class="button">
        <router-link to="/kontakt">Dołącz do nas!</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.joinus {
  width: 100%;

  padding: 80px 20%;

  background: #dddddd;
}

.heading {
  max-width: 750px;
  padding: 100px 0;

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
}

.button a {
  color: #ffffff;
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