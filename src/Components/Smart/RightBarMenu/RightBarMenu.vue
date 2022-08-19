<template>
  <div class="right-bar-menu">
    <img
      class="user-profile-picture"
      src="https://s3.ir-thr-at1.arvanstorage.com/hellow-chat/default-profile-picture.png"
      alt=""
    />
    <div class="account">
      <p class="fullname">رضا زنگنه ثانی</p>
      <p class="username">reza.zanganeh</p>
    </div>
    <BaseDevider />
    <RightBarMenuItems />
    <div class="application-info">
      <p class="name">Hellow Chat</p>
      <p class="version">0.1</p>
    </div>
  </div>
</template>

<script setup>
import RightBarMenuItems from "./RightBarMenuItems.vue";
import { useSystemStore } from "@/stores/system";
import { computed } from "vue";
import { storeToRefs } from "pinia";
import BaseDevider from "../../Base/UI/BaseDevider.vue";
const systemStore = useSystemStore();
const { rightMenuIsOpen } = storeToRefs(systemStore);
const rightMenuTranslateX = computed(() => {
  return rightMenuIsOpen.value ? `translateX(${0}%)` : `translateX(${100}%)`;
});
</script>

<style scoped lang="scss">
.right-bar-menu {
  background-color: var(--second-background-color);
  width: 35rem;
  height: 100%;
  z-index: 1000;
  transition: transform 0.5s ease-in-out;
  transform: v-bind(rightMenuTranslateX);
  position: absolute;
  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;
  .user-profile-picture {
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
  }
  .account {
    width: 100%;
    font-size: 1.4rem;
    margin: 1rem 0 1.5rem 0;
    .fullname {
      font-weight: bold;
    }
    .username {
      text-align: left;
    }
  }
}

.application-info {
  margin: auto auto 0 0;
  text-align: left;
  font-size: 1.2rem;
  color: $version-color;
}
</style>
