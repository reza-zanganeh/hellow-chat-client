<template>
  <div class="rooms">
    <div class="rooms-header">
      <HamburegerIcon @click="openRightMenu" />
      <RoomsSearBox />
    </div>
    <RoomItems />
  </div>
</template>

<script setup>
import { useSystemStore } from "../../../stores/system";
import RoomItems from "./RoomItems.vue";
import HamburegerIcon from "@/Components/Base/Icon/HamburegerIcon.vue";
import RoomsSearBox from "./RoomsSearBox.vue";
const systemStore = useSystemStore();
const { openRightMenu } = systemStore;
</script>

<style scoped lang="scss">
.rooms {
  &-header {
    display: flex;
    margin: 2rem 1rem;
  }
}
</style>
