<template>
  <ul class="items noselect">
    <li class="item creaet-new-group">
      <GroupIcon />
      <p>ایجاد گروه</p>
    </li>
    <li class="item create-new-chanel">
      <SpeakerIcon />
      <p>ایجاد کانال</p>
    </li>
    <SmartPrivateChat />
    <li class="item save-message">
      <SavedIcon />
      <p>پیام های ذخیره شده</p>
    </li>
    <li class="item setting">
      <SettingIcon />
      <p>تنظیمات</p>
    </li>
    <li class="item night-mode">
      <MoonIcon />
      <p>حالت تاریک</p>
    </li>
  </ul>
</template>

<script setup>
import SpeakerIcon from "../../Base/Icon/SpeakerIcon.vue";
import GroupIcon from "../../Base/Icon/GroupIcon.vue";
import SavedIcon from "../../Base/Icon/SavedIcon.vue";
import SettingIcon from "../../Base/Icon/SettingIcon.vue";
import MoonIcon from "../../Base/Icon/MoonIcon.vue";
import SmartPrivateChat from "@/Components/Smart/RightBarMenu/PrivateChat/SmartPrivateChat.vue";
</script>

<style scoped lang="scss">
.items {
  display: block;
  ::v-deep(.item) {
    display: flex;
    width: 100%;
    margin: 1rem 0;
    align-items: center;
    cursor: pointer;
    &:hover {
      filter: brightness(120%);
    }
    img {
      height: 3.2rem;
      width: 3.2rem;
      border-radius: 8px;
      padding: 0.6rem;
      margin-left: 2rem;
    }
    p {
      font-weight: bold;
      font-size: 1.4rem;
    }
  }

  .creaet-new-group img,
  .save-message img {
    background-color: $swatch-light_2;
  }
  .create-new-chanel img {
    background-color: $new-chanel;
  }
  .setting img {
    background-color: $setting;
  }
  .night-mode img {
    background-color: $night-mode;
  }
}
</style>
