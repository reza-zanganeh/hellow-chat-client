<template>
  <div class="otp-input-wrapper">
    <p>لطفا رمز یکبار مصرف خود را بصورت کامل وارد کنید</p>
    <VOtpInput
      input-classes="otp-input"
      :num-inputs="5"
      :should-auto-focus="true"
      separator=""
      :is-input-num="true"
      @on-complete="emitOtpCode"
    />
  </div>
</template>

<script setup>
import VOtpInput from "vue3-otp-input";
const emit = defineEmits(["otp-code"]);
const emitOtpCode = (code) => {
  emit("otp-code", code);
};
</script>

<style scoped lang="scss">
.otp-input-wrapper {
  min-height: 7rem;
  direction: ltr;
  p {
    margin: 1rem 0;
  }
  ::v-deep(.otp-input) {
    width: 100%;
    padding: 1rem 0;
    background: transparent;
    border: none;
    margin: 0.25rem;
    border-bottom: solid 1.5px $swatch-dark_3;
    transition: border-bottom-color 0.1s linear;
    text-align: center;
    &:focus {
      border-bottom-color: $swatch-light_2;
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px var(--main-background-color) inset !important;
    }
    &:-webkit-autofill {
      -webkit-text-fill-color: var(--main-font-color) !important;
    }
  }
}
.error-message {
  font-size: 1.2rem;
}
</style>
