<template>
  <div class="wrapper">
    <BaseButton
      v-if="!isButtonLoading"
      :classes="classes"
      :type="type"
      :title="title"
      @click="$emit('click')"
      @submit="$emit('submit')"
    />
    <BaseLoading v-else />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useSystemStore } from "../../../stores/system";
import BaseButton from "../../Base/UI/BaseButton.vue";
import BaseLoading from "../../Base/UI/BaseLoading.vue";
defineProps(["classes", "type", "title"]);
const system = useSystemStore();
const { isButtonLoading } = storeToRefs(system);
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 8rem;
}
</style>
