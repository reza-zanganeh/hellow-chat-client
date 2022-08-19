<template>
  <ul class="user-list">
    <SmartUserItem />
    <SmartUserItem />
    <SmartUserItem />
  </ul>
</template>

<script setup>
import SmartUserItem from "./SmartUserItem.vue";
</script>

<style scoped lang="scss">
.user-list {
  width: 100%;
  overflow-y: scroll;
  height: 40rem;
}
</style>
