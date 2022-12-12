<template>
  <button class="sort-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "VButton",
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/base.scss";

.sort-button {
  width: 100%;
  min-height: 50px;
  background-color: white;
  border-radius: 0;
  text-transform: uppercase;
  color: $primary-color;
  font-weight: 600;
  font-size: 12px;
  word-break: break-word;

  &.active {
    background-color: $highlight-color;
    color: white;
  }
}
</style>
