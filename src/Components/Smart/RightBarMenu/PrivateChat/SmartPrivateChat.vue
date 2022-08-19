<template>
  <BaseStepper :steps="steps" ref="Stepper" />
</template>

<script setup>
import BaseStepper from "@/Components/Base/Stepper/BaseStepper.vue";
import SmartCreatePrivateChat from "./SmartCreatePrivateChat.vue";
import SmartInvite from "@/Components/Smart/Invite/SmartInvite.vue";
import { ref } from "vue";
const steps = [
  { name: "SmartCreatePrivateChat", component: SmartCreatePrivateChat },
  { name: "SmartInvite", component: SmartInvite },
];
const Stepper = ref();
</script>
