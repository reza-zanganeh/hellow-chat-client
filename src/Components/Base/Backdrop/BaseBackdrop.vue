<template>
  <div class="backdrop" :class="{ active: backdropIsOpen }"></div>
</template>

<script setup>
defineProps(["backdropIsOpen"]);
</script>

<style scoped lang="scss">
.backdrop {
  position: fixed;
  z-index: 100;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: $swatch-dark_1;
  opacity: 0;
  visibility: hidden;
}
.active {
  opacity: 0.4;
  visibility: visible;
}
</style>
