<!-- fullname
username
password -->
<template>
  <Form class="auth-form" @submit="submitHandler">
    <h1 class="auth-form-title">لطفا برای ورود اطلاعات خود را وارد کنید</h1>
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
    <SmartButton type="submit" classes="auth-form-button" title="ورورد" />
  </Form>
</template>

<script setup>
import { Form } from "vee-validate";
import { useRouter } from "vue-router";
import SmartButton from "../UI/SmartButton.vue";
import BaseInputForm from "../../Base/Form/BaseInputForm.vue";
import usePinia from "@/Composable/usePinia";
import { useAuthStore } from "@/stores/auth";

const router = useRouter();
const authStore = useAuthStore();
const { callActionWithBtnLoading } = usePinia();
const { login } = authStore;
const submitHandler = async (data) => {
  const result = await callActionWithBtnLoading(login, {
    username: data.username,
    password: data.password,
  });
  if (result) router.push({ name: "Dashboard" });
};
</script>

<style scoped lang="scss">
.auth-form {
  text-align: right;
  width: 28rem;
  &-title {
    margin-bottom: 3rem;
  }
  &-button {
    margin-top: 4.5rem;
  }
}
</style>
