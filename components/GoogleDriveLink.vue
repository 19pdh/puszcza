<template>
  <div class="google-drive-link">
    <div class="image">
      <img src="/assets/google-drive.png" alt="Drive" />
    </div>
    <p>
      {{ text }}
    </p>
    <a :href="link">
      <plain-button text="Przejdź" />
    </a>
  </div>
</template>

<script>
import PlainButton from './Buttons/PlainButton'

export default {
  name: 'GoogleDriveLink',
  components: { PlainButton },
  props: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.google-drive-link {
  background: white;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);

  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 200px;
}

.google-drive-link img {
  display: block;
  margin: auto;
}

.google-drive-link .image {
  background: #f3f3f3;
  border-radius: 50px;
  padding: 20px;
  margin: 20%;
}
</style>
