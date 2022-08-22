<template>
  <RecycleScroller
    class="room-items"
    :items="rooms"
    :item-size="60"
    key-field="id"
    v-slot="{ item }"
    :buffer="400"
  >
    <RoomItem :name="item.name" />
  </RecycleScroller>
</template>

<script setup>
import RoomItem from "./RoomItem.vue";
import { RecycleScroller } from "vue3-virtual-scroller";
const props = defineProps({
  rooms: {
    type: Array,
    default: [],
  },
});
</script>

<style scoped lang="scss">
.room-items {
  overflow-y: auto;
  height: 100%;
}
</style>
