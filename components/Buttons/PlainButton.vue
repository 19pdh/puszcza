<template>
  <button class="button" @click="$emit('click')">{{ text }}</button>
</template>

<script>
export default {
  name: 'PlainButton',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.button {
  background-color: #507b34;
  padding: 10px;
  max-width: 150px;
  border: none;

  cursor: pointer;

  color: #ffffff;
  text-align: center;
  font: 16px 'Roboto Slab';
}
</style>
