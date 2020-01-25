<template>
  <client-only>
    <div class="countdown">
      {{ text }} <span>{{ days }} dni</span>
    </div>
  </client-only>
</template>

<script>
export default {
  name: 'DayCountdown',
  props: {
    text: {
      type: String,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    startDate: {
      type: Date,
      default: () => new Date(Date.now()),
    },
  },
  computed: {
    days() {
      return Math.round(
        (this.endDate.getTime() - this.startDate.getTime()) / 86400000
      )
    },
  },
}
</script>

<style>
.countdown {
  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 50px 10px;
}

.countdown span {
  font-weight: 600;
}
</style>
