<template>
  <teleport to="#popup" v-if="isShow">
    <div class="popup">
      <slot />
    </div>
  </teleport>
</template>

<script setup>
defineProps(["isShow"]);
</script>

<style scoped lang="scss">
.popup {
  position: fixed;
  background-color: var(--third-background-color);
  top: 50%;
  left: 50%;
  z-index: 1000;
  width: 40rem;
  border-radius: 10px;
  transition: all 0.5s linear;
  transform: translate(-50%, -50%);
  padding: 1.5rem;
}
</style>
