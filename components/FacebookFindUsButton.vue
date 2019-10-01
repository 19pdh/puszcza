<template>
  <a href="https://facebook.com/19pdhpuszcza" target="_blank" rel="noopener">
    <div class="button">
      <img class="image" src="/assets/social/find_us_fb.png" alt="Find us on Facebook" />
    </div>
  </a>
</template>

<style scoped>
.button {
  border: 2px solid #c4c4c4;
  border-radius: 4px;

  padding: 15px 40px;
  margin: 10px;
}

.button:hover {
  background-color: #efefef;
}

.image {
  width: 200px;
}

@media (max-width: 500px) {
  a {
    width: 100%;
  }

  .image {
    width: 150px;
  }
}
</style>