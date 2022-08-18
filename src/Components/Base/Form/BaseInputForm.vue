<template>
  <div class="input-container">
    <label v-if="lable" :for="name">{{ label }}</label>
    <Field
      :class="classes"
      :rules="rules"
      :id="name"
      :type="inputType"
      :name="name"
      :placeholder="placeholder"
    />
    <p
      @click="togglePasswordVisibility"
      class="show-password noselect"
      v-if="name === 'password'"
    >
      {{ passwordIsVisible ? "عدم نمایش رمز عبور" : "نمایش رمز عبور" }}
    </p>
    <ErrorMessage class="error-message" :name="name" />
  </div>
</template>

<script setup>
import { computed, ref, toRefs } from "vue";
import { Field, ErrorMessage } from "vee-validate";
const props = defineProps([
  "type",
  "lable",
  "name",
  "classes",
  "rules",
  "placeholder",
  "focus",
]);
const { type, name } = toRefs(props);
const passwordIsVisible = ref(false);
const togglePasswordVisibility = () => {
  passwordIsVisible.value = !passwordIsVisible.value;
};
const inputType = computed(() => {
  if (name.value === "password" && passwordIsVisible.value) return "text";
  else return type.value;
});
const minHeightContainer = computed(() => {
  return name.value === "password" ? "9rem" : "7rem";
});
</script>

<style scoped lang="scss">
.input-container {
  min-height: v-bind(minHeightContainer);
}
input {
  width: 100%;
  padding: 1rem 0;
  background: transparent;
  border: none;
  margin: 0.5rem;
  border-bottom: solid 1.5px $swatch-dark_3;
  transition: border-bottom-color 0.1s linear;
  &:focus {
    border-bottom-color: $swatch-light_2;
  }
  &[type="email"] {
    text-align: left;
    direction: ltr;
  }
}
.error-message {
  font-size: 1.2rem;
}
.show-password {
  cursor: pointer;
  font-size: 1.2rem;
}
</style>
