<template>
  <router-view />
  <BaseBackdrop @click="closeBackdrop" :backdrop-is-open="backdropIsOpen" />
  <div id="popup"></div>
</template>

<script setup>
import { RouterView } from "vue-router";
import { storeToRefs } from "pinia";
//#region backdrop
import BaseBackdrop from "./Components/Base/Backdrop/BaseBackdrop.vue";
import { useSystemStore } from "./stores/system";
const systemStore = useSystemStore();
const { backdropIsOpen } = storeToRefs(systemStore);
const { closeBackdrop } = systemStore;
//#endregion
//#region inial data
import { useAuthStore } from "./stores/auth";
const authStore = useAuthStore();
const { autoSetInfoFromBrowserStorge } = authStore;
autoSetInfoFromBrowserStorge();
//#endregion
</script>

<style lang="scss"></style>
