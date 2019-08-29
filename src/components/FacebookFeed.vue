<template>
  <section>
    <h1>Ostatnie wpisy</h1>
  </section>
</template>

<script>
export default {
  mounted() {
    fetch(
      `http://fetchrss.com/rss/5d6675308a93f8773c8b45685d66750d8a93f8bb388b4567.xml`
    ).then(console.log);
  }
};
</script>