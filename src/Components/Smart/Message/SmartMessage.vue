<template>
  <div class="message" :class="messageClass">
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { computed, toRefs } from "vue";

const props = defineProps(["isOwnMessage", "message"]);
const { isOwnMessage } = toRefs(props);
const messageClass = computed(() => {
  return isOwnMessage.value
    ? { "message-own": true }
    : { "message-other": true };
});
</script>

<style lang="scss" scoped>
.message {
  margin: 0.5rem 0;
  border-radius: 5px;
  width: fit-content;
  height: fit-content;
  p {
    font-weight: bold;
  }
  &-own {
    padding: 1rem 1rem 1rem 2rem;
    background-color: $swatch-light_2;
  }
  &-other {
    padding: 1rem 2rem 1rem 1rem;
    background-color: $swatch-dark_2;
    margin-right: auto;
  }
}
</style>
