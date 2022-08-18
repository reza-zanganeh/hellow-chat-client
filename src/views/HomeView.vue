<template>
  <div class="home-view">
    <img
      class="back-icon"
      src="@/assets/icon/left-arrow.png"
      alt="left-arrow"
      @click="Stepper.goTo('SmartWelcome')"
    />
    <BaseStepper
      ref="Stepper"
      :steps="steps"
      key="HomeViewStepper"
      @go-to-register="Stepper.goTo('SmartRegister')"
      @go-to-login="Stepper.goTo('SmartLogin')"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import SmartRegister from "../Components/Smart/Register/SmartRegister.vue";
import SmartLogin from "../Components/Smart/Login/SmartLogin.vue";
import SmartWelcome from "../Components/Smart/Welcome/SmartWelcome.vue";
import BaseStepper from "../Components/Base/Stepper/BaseStepper.vue";
const Stepper = ref(null);
const steps = [
  { name: "SmartWelcome", component: SmartWelcome },
  { name: "SmartRegister", component: SmartRegister },
  { name: "SmartLogin", component: SmartLogin },
];
</script>

<style scoped lang="scss">
.home-view {
  border-radius: 0 5% 5% 0;
  height: 100%;
  width: 100%;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.back-icon {
  position: absolute;
  left: 2rem;
  top: 2rem;
  cursor: pointer;
}
</style>
