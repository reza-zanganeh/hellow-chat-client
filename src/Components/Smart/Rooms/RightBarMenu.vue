<template>
  <div class="right-bar-menu">
    <img
      class="user-profile-picture"
      src="https://s3.ir-thr-at1.arvanstorage.com/hellow-chat/default-profile-picture.png"
      alt=""
    />
    <div class="account">
      <p class="fullname">رضا زنگنه ثانی</p>
      <p class="username">reza.zanganeh</p>
    </div>
    <div class="horizontal-line"></div>
    <ul class="actions noselect">
      <li class="action creaet-new-group">
        <GroupIcon />
        <p>New Group</p>
      </li>
      <li class="action create-new-chanel">
        <SpeakerIcon />
        <p>New Chanel</p>
      </li>
      <li class="action creaet-private-chat">
        <ContactIcon />
        <p>New Private Chat</p>
      </li>
      <li class="action save-message">
        <SavedIcon />
        <p>Saved Message</p>
      </li>
      <li class="action setting">
        <SettingIcon />
        <p>Setting</p>
      </li>
      <li class="action night-mode">
        <MoonIcon />
        <p>Night Mode</p>
      </li>
    </ul>
    <div class="application-info">
      <p class="name">Hellow Chat</p>
      <p class="version">0.1</p>
    </div>
  </div>
  <div
    class="backdrop"
    :class="{ active: rightMenuIsOpen }"
    @click="closeRightMenu"
  ></div>
</template>

<script setup>
import { useSystemStore } from "@/stores/system";
import { computed } from "vue";
import { storeToRefs } from "pinia";
import ContactIcon from "../../Base/Icon/ContactIcon.vue";
import GroupIcon from "../../Base/Icon/GroupIcon.vue";
import SpeakerIcon from "../../Base/Icon/SpeakerIcon.vue";
import SavedIcon from "../../Base/Icon/SavedIcon.vue";
import SettingIcon from "../../Base/Icon/SettingIcon.vue";
import MoonIcon from "../../Base/Icon/MoonIcon.vue";
const systemStore = useSystemStore();
const { rightMenuIsOpen } = storeToRefs(systemStore);
const { closeRightMenu } = systemStore;
const rightMenuTranslateX = computed(() => {
  return rightMenuIsOpen.value ? `translateX(${0}%)` : `translateX(${100}%)`;
});
</script>

<style scoped lang="scss">
.right-bar-menu {
  background-color: var(--second-background-color);
  width: 35rem;
  height: 100%;
  z-index: 1000;
  transition: transform 0.5s ease-in-out;
  transform: v-bind(rightMenuTranslateX);
  position: absolute;
  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;
  .user-profile-picture {
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
  }
  .account {
    width: 100%;
    font-size: 1.4rem;
    margin: 1rem 0 1.5rem 0;
    .fullname {
      font-weight: bold;
    }
    .username {
      text-align: left;
    }
  }
  .horizontal-line {
    width: 100%;
    height: 0.1rem;
    background-color: var(--main-background-color);
    border-radius: 5px;
    margin: 1.5rem 0;
  }
}
.backdrop {
  position: fixed;
  z-index: 100;
  height: 100%;
  width: 100%;
  background-color: $swatch-dark_1;
  opacity: 0;
  visibility: hidden;
}
.active {
  opacity: 0.4;
  visibility: visible;
}
.actions {
  display: block;
  .action {
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
  .creaet-private-chat img {
    background-color: $contact;
  }
  .setting img {
    background-color: $setting;
  }
  .night-mode img {
    background-color: $night-mode;
  }
}
.application-info {
  margin: auto auto 0 0;
  text-align: left;
  font-size: 1.2rem;
  color: $version-color;
}
</style>
