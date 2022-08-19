<template>
  <div class="dashboard">
    <RightBarMenu />
    <RoomBox />
    <ChatBox />
  </div>
</template>

<script setup>
import RoomBox from "@/Components/Smart/Rooms/RoomBox.vue";
import ChatBox from "@/Components/Smart/ChatBox/ChatBox.vue";
import RightBarMenu from "@/Components/Smart/RightBarMenu/RightBarMenu.vue";
</script>

<style scoped lang="scss">
.dashboard {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  ::v-deep(.rooms) {
    background-color: var(--second-background-color);
    width: 30%;
    min-width: 35rem;
    overflow-y: hidden;
    @include responsive(phone) {
      // width: 0;
      width: 100%;
      min-width: unset;
    }
  }
  ::v-deep(.chat-box) {
    overflow-y: hidden;
    width: 70%;
    @include responsive(phone) {
      // width: 100%;
      width: 0;
    }
  }
}
</style>
