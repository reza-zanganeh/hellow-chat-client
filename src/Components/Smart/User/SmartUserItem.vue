<template>
  <li class="user">
    <img
      src="https://s3.ir-thr-at1.arvanstorage.com/hellow-chat/default-profile-picture.png"
      alt=""
      class="user-profile-piture"
    />
    <div class="user-info">
      <p class="name">رضا زنگنه ثانی</p>
      <p class="last-seen">اخرین بازدید 1 دقیقه پیش</p>
    </div>
  </li>
</template>

<style scoped lang="scss">
.user {
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 5rem;
  margin: 1rem 0;
  &:hover {
    filter: brightness(120%);
  }
  &-profile-piture {
    width: 5rem;
    border-radius: 50%;
    margin-left: 1.5rem;
  }
  .name {
    font-weight: bold;
    font-size: 1.4rem;
  }
}
</style>
