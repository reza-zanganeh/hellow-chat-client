<template>
  <img
    class="hamburger-menu"
    src="@/assets/icon/hamburger-menu.svg"
    alt="hamburger-menu"
  />
</template>

<style scoped lang="scss">
.hamburger-menu {
  cursor: pointer;
  filter: brightness(60%);
  transition: filter 0.1s linear;
  &:hover {
    filter: brightness(120%);
  }
}
</style>
