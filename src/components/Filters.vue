<template>
  <div class="filter-stops">
    <div class="filter-stops__header">{{ FILTERS_TITLE }}</div>
    <div
      class="filter-stops__stop"
      v-for="transfer in transfers"
      :key="transfer.label"
    >
      <input
        class="stop__selector"
        type="checkbox"
        :checked="transfer.selected"
        @change="setFilters(transfer.id)"
      />
      {{ transfer?.label }}
    </div>
  </div>
</template>

<script>
import { FILTERS_TITLE } from "../constants/messages.js";

export default {
  name: "Filters",
  data: () => ({
    FILTERS_TITLE,
  }),
  props: {
    transfers: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  emits: ["setFilters"],
  methods: {
    setFilters(event) {
      this.$emit("setFilters", event);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/base.scss";

.filter-stops {
  @extend %rounded-shadowed;
  width: 232px;
  height: 290px;
  &__header {
    @extend %display-center;
    @extend %headers-font;
    width: 100%;
    min-height: 52px;
  }
  &__stop {
    display: flex;
    align-items: center;
    min-height: 20px;
    padding: 10px 5px 10px 20px;
    font-size: 13px;
    cursor: default;
  }
  .filter-stops__stop:hover {
    background-color: $highlight-background;
  }
  .stop__selector {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    cursor: pointer;
  }
}
.filter-stops--small {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
.stop--small {
  padding: 10px 5px;
  font-size: 10px;
}
</style>
