<template>
  <div class="joinus">
    <div class="title">
      <h1 class="text">Rozpocznij swoją harcerską przygodę!</h1>
    </div>
    <div class="button">
      <router-link to="/join-us">Dołącz do nas!</router-link>
    </div>
  </div>
</template>

<style scoped>
.joinus {
}

.title {
  background-color: #340c0e;
  color: #ffffff;

  max-width: 330px;

  text-align: left;
}

.title .text {
  padding: 10px;
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
</style>