<template>
  <router-view />
</template>

<script setup>
import { RouterView } from "vue-router";
//#region inial data
import { useAuthStore } from "./stores/auth";
const authStore = useAuthStore();
const { autoSetInfoFromBrowserStorge } = authStore;
autoSetInfoFromBrowserStorge();
//#endregion
</script>

<style lang="scss"></style>
