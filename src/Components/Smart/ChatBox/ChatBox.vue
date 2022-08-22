<template>
  <div v-if="messages.length <= 0" class="no-chat-selected">
    <p>برای شروع یک چت را انتخاب کنید</p>
  </div>
  <div v-else class="chat-box">
    <SmartMessageBox />
    <SmartMessageInput />
  </div>
</template>

<script setup>
defineProps({
  messages: {
    type: Array,
    default: [],
  },
});
import SmartMessageBox from "../Message/SmartMessageBox.vue";
import SmartMessageInput from "../Message/SmartMessageInput.vue";
</script>

<style scoped lang="scss">
.no-chat-selected {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  overflow: hidden;
  @include responsive(phone) {
    // width: 100%;
    width: 0;
  }
  p {
    font-size: 1.5rem;
    background-color: var(--second-background-color);
    padding: 1rem 2rem;
    border-radius: 50px;
  }
}
.chat-box {
  overflow-y: hidden;
  width: 70%;
  @include responsive(phone) {
    // width: 100%;
    width: 0;
  }
}
</style>
