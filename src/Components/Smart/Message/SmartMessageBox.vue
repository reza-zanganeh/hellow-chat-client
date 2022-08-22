<template>
  <RecycleScroller
    class="message-box"
    :items="messages"
    :item-size="50"
    key-field="id"
    v-slot="{ item }"
    :buffer="320"
  >
    <SmartMessage :is-own-message="item.isOwn" :message="item.message" />
  </RecycleScroller>
</template>
<script setup>
defineProps({
  messages: {
    type: Array,
    default: [],
  },
});
import { onMounted } from "vue";
import SmartMessage from "./SmartMessage.vue";
import { RecycleScroller } from "vue3-virtual-scroller";
onMounted(() => {
  setTimeout(() => {
    document.querySelector(".message-box").scrollTop =
      document.querySelector(".message-box").scrollHeight;
  }, 20);
});
</script>

<style scoped lang="scss">
.message-box {
  height: calc(100% - 6rem);
  padding: 1rem;
  overflow-y: scroll;
}
.message-wrapper {
  height: 100%;
}
// .gapSpace {
//   height: v-bind(gapSpaceHeight);
// }
</style>
