<template>
  <div class="welcome">
    <h1 class="welcome-title">به <span> Hellow Chat </span>خوش امدید</h1>
    <BaseButton
      @click="$emit('go-to-register')"
      type="submit"
      classes="register-button"
      title="ثبت نام"
    />
    <BaseButton
      @click="$emit('go-to-login')"
      type="submit"
      classes="login-button"
      title="ورود"
    />
  </div>
</template>

<script setup>
import BaseButton from "../../Base/UI/BaseButton.vue";
</script>

<style lang="scss" scoped>
.welcome {
  width: 28rem;
  display: flex;
  flex-direction: column;
  &-title {
    margin-bottom: 5rem;
  }
  ::v-deep(.login-button) {
    margin-top: 1rem;
  }
}
</style>
