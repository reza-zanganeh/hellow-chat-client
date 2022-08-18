<template>
  <div class="room-items">
    <RoomItem />
    <RoomItem />
    <RoomItem />
    <RoomItem />
    <RoomItem />
    <RoomItem />
    <RoomItem />
    <RoomItem />
    <RoomItem />
    <RoomItem />
    <RoomItem />
    <RoomItem />
    <RoomItem />
    <RoomItem />
    <RoomItem />
    <RoomItem />
    <RoomItem />
    <RoomItem />
  </div>
</template>

<script setup>
import RoomItem from "./RoomItem.vue";
</script>

<style scoped lang="scss">
.room-items {
  overflow-y: scroll;
  height: 100%;
}
</style>
