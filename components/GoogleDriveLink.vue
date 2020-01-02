<template>
  <div class="google-drive-link">
    <div class="image">
      <img src="/assets/google-drive.png" alt="Drive" />
    </div>
    <div class="text">
      <p v-html="text"></p>
    </div>
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
  margin: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.google-drive-link .text {
  margin: 30px 0;
  font-size: 18px;
}

.google-drive-link button,
.google-drive-link a {
  width: 100%;
  display: block;
  margin: auto;
  text-decoration: none;
  max-width: 300px;
}

.google-drive-link img {
  display: block;
  margin: auto;
  width: 40px;
}

.google-drive-link .image {
  background: #f3f3f3;
  border-radius: 50px;
  padding: 15px;
  margin: 0 20%;
}

@media (min-width: 530px) {
  .google-drive-link {
    flex-direction: row;
  }

  .google-drive-link .text {
    margin: 0 10px;
    flex: 1;
    text-align: left;
    font-size: 16px;
  }

  .google-drive-link .image {
    margin: 0;
    margin-right: 10px;
    padding: 10px;
  }

  .google-drive-link img {
    width: 30px;
  }

  .google-drive-link a,
  .google-drive-link button {
    margin-right: 0;
  }

  .google-drive-link a {
    width: 20%;
  }
}

@media (min-width: 960px) {
  .google-drive-link {
    width: 100%;
  }
}
</style>
