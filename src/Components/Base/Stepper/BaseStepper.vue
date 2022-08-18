<template>
  <Transition name="fade" mode="out-in">
    <component :is="steps[activeComponent].component" />
  </Transition>
</template>

<script setup>
import { ref, toRefs } from "vue";
const props = defineProps({
  steps: {
    type: Array,
    required: true,
  },
  classes: {
    type: String,
  },
});
const { steps } = toRefs(props);
const activeComponent = ref(0);
const goTo = (component) => {
  activeComponent.value = steps.value.findIndex(
    (step) => step.name == component
  );
};
const next = () => {
  if (activeComponent.value < steps.value.length - 1) activeComponent.value++;
};
const prev = () => {
  if (activeComponent.value > 0) activeComponent.value--;
};

defineExpose({ goTo, next, prev });
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
