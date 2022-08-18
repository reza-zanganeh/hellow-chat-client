<!-- fullname
username
password -->
<template>
  <Form class="auth-form" @submit="submitHandler">
    <h1 class="auth-form-title">لطفا برای ثبت نام اطلاعات خود را وارد کنید</h1>
    <BaseInputForm
      classes="auth-form-fullname"
      type="text"
      name="fullname"
      rules="required"
      placeholder="نام و نام خانوادگی"
    />
    <BaseInputForm
      classes="auth-form-username"
      type="text"
      name="username"
      rules="required"
      placeholder="نام کاربری"
    />
    <BaseInputForm
      classes="auth-form-password"
      type="password"
      name="password"
      rules="required"
      placeholder="رمز عبور"
    />
    <BaseOtpInputForm @otp-code="saveOtpCode" />
    <SmartButton type="submit" classes="auth-form-button" title="ثبت نام" />
    <p class="timer">
      <span>زمان اعتبار رمز یکبار مصرف</span>
      <span>{{ styledTime }}</span>
    </p>
  </Form>
</template>

<script setup>
import { Form } from "vee-validate";
import SmartButton from "../UI/SmartButton.vue";
import BaseInputForm from "../../Base/Form/BaseInputForm.vue";
import BaseOtpInputForm from "@/Components/Base/Form/BaseOtpInputForm.vue";
import { useAuthStore } from "../../../stores/auth";
import useTimer from "@/Composable/useTimer";
import { storeToRefs } from "pinia";
const emit = defineEmits(["register"]);
const authStore = useAuthStore();
let otpCode = "null";
const { styledTime, timer } = useTimer();
const { expiresIn } = storeToRefs(authStore);
const expiresInInMinute = expiresIn.value / 60000;
timer(expiresInInMinute);
const saveOtpCode = (code) => {
  otpCode = code;
};
const submitHandler = (data) => {
  if (!otpCode) return;
  emit("register", { ...data, otpCode: otpCode });
};
</script>

<style scoped lang="scss">
.auth-form {
  text-align: right;
  width: 28rem;
  &-title {
    margin-bottom: 3rem;
  }
  ::v-deep(.auth-form-button) {
    margin: 2rem 0 1.5rem 0;
  }
  .timer {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
