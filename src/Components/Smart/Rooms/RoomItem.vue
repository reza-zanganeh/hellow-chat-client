<template>
  <div class="room-item">
    <img
      src="https://s3.ir-thr-at1.arvanstorage.com/hellow-chat/default-profile-picture.png"
      alt=""
      class="room-img"
    />
    <div class="room-info">
      <p class="room-info-name">
        کافه بازار با اب هویچ و شیرینی و کرفس و پرتقال و سیب زمینی
      </p>
      <p class="room-info-last-message">
        به کافه بازار خییییییییییییییییییییییییییوش امدید
      </p>
    </div>
    <div class="room-last-message-time">
      <span>12:20</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.room {
  &-item {
    display: flex;
    height: 6rem;
    width: 100%;
    align-items: center;
    overflow: hidden;
    padding: 0 1rem;
    margin: 1rem 0;
  }
  &-img {
    height: 90%;
    border-radius: 50%;
    margin-left: 1rem;
  }
  &-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90%;
    p {
      text-overflow: ellipsis;
      width: 20rem;
      overflow: hidden;
      white-space: nowrap;
    }
    &-name {
      font-weight: bold;
      font-size: 1.5rem;
    }
    &-last-message {
      font-size: 1.2rem;
    }
  }
  &-last-message-time {
    margin: 1rem auto auto 0;
  }
}
</style>
