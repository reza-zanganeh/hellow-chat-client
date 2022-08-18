<template>
  <div class="rooms">
    <div class="rooms-header">
      <img
        class="hamburger-menu"
        src="@/assets/icon/hamburger-menu.svg"
        alt="hamburger-menu"
      />
      <input type="text" class="search-input" placeholder="جستجو" />
    </div>
    <RoomItems />
  </div>
</template>

<script setup>
import RoomItems from "./RoomItems.vue";
</script>

<style scoped lang="scss">
.rooms {
  &-header {
    display: flex;
    margin: 2rem 1rem;
    .search-input {
      background-color: var(--third-background-color);
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      width: 100%;
      font-size: 1.4rem;
      margin-right: 1rem;
    }
    .hamburger-menu {
      cursor: pointer;
    }
  }
}
</style>
