<template>
  <Form class="auth-form" @submit="submitHandler">
    <h1 class="auth-form-title">ایمیل شما</h1>
    <h3 class="auth-form-subtitle">لطفا برای ثبت نام ایمیل خود را وارد کنید</h3>
    <BaseInputForm
      classes="auth-form-email"
      type="email"
      name="email"
      rules="required|email"
    />
    <SmartButton type="submit" classes="auth-form-button" title="مرحله بعدی" />
  </Form>
</template>

<script setup>
import { Form } from "vee-validate";
import SmartButton from "../UI/SmartButton.vue";
import BaseInputForm from "../../Base/Form/BaseInputForm.vue";
const emit = defineEmits(["entered-email"]);
const submitHandler = (data) => {
  emit("entered-email", data.email);
};
</script>

<style scoped lang="scss">
.auth-form {
  text-align: right;
  width: 28rem;
  &-title {
    margin-bottom: 1.5rem;
  }
  &-subtitle {
    margin-bottom: 5rem;
  }
  &-button {
    margin-top: 4.5rem;
  }
}
</style>
