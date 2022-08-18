<template>
  <BaseStepper
    ref="Stepper"
    :steps="steps"
    @entered-email="saveEmail"
    @register="registerHandler"
    key="RegisterStepper"
  />
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import BaseStepper from "../../Base/Stepper/BaseStepper.vue";
import { useAuthStore } from "@/stores/auth";
import usePinia from "@/Composable/usePinia";
import ResgiterStep1 from "./ResgiterStep1.vue";
import RegisterStep2 from "./RegisterStep2.vue";
const router = useRouter();
const Stepper = ref(null);
const steps = [
  { name: "ResgiterStep1", component: ResgiterStep1 },
  { name: "RegisterStep2", component: RegisterStep2 },
];
const authStore = useAuthStore();
const { callActionWithBtnLoading } = usePinia();
const { sendOtpRequest, register } = authStore;
const saveEmail = async (enteredEmail) => {
  email.value = enteredEmail;
  const result = await callActionWithBtnLoading(sendOtpRequest, {
    email: email.value,
  });
  if (result) Stepper.value.next();
};
const registerHandler = async (data) => {
  const result = await callActionWithBtnLoading(register, {
    fullname: data.fullname,
    username: data.username,
    password: data.password,
    otpCode: data.otpCode,
  });
  if (result)
    router.push({
      name: "Dashboard",
    });
};
const email = ref(null);
</script>
