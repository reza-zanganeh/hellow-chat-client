<template>
  <div class="dashboard">
    <RoomBox />
    <ChatBox />
  </div>
</template>

<script setup>
import RoomBox from "@/Components/Smart/Rooms/RoomBox.vue";
import ChatBox from "@/Components/Smart/ChatBox/ChatBox.vue";
</script>

<style scoped lang="scss">
.dashboard {
  display: flex;
  width: 100%;
  height: 100%;
  ::v-deep(.rooms) {
    flex: 1;
    background-color: var(--second-background-color);
  }
  ::v-deep(.chat-box) {
    flex: 3;
  }
}
</style>
