<template>
  <div class="flight">
    <div class="flight__head">{{ head }}</div>
    <div class="flight__info">{{ info }}</div>
  </div>
</template>

<script>
export default {
  name: "TicketFlight",
  props: {
    head: {
      type: String,
    },
    info: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.flight {
  width: 141px;
  display: flex;
  flex-direction: column;
  &__head {
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0.5px;
    color: #a0b0b9;
  }
  &__info {
    font-weight: 600;
    line-height: 21px;
    font-size: 14px;
    letter-spacing: 0.5px;
  }
}
</style>
