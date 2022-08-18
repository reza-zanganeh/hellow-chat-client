<template>
  <button
    @click="$emit('click')"
    @submit="$emit('submit')"
    :class="classes"
    :type="type"
  >
    {{ title }}
  </button>
</template>

<script setup>
defineProps(["classes", "type", "title"]);
</script>

<style scoped lang="scss">
button {
  border: none;
  background: $swatch-light_2;
  width: 100%;
  padding: 2rem 1rem;
  border-radius: 10px;
  font-weight: bold;
  &:hover {
    filter: brightness(110%);
  }
  cursor: pointer;
}
</style>
