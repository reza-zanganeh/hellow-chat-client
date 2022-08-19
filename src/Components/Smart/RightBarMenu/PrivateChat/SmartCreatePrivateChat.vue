<template>
  <div class="creaet-private-chat">
    <li class="item" @click="openPopup(POPUP_NAME)">
      <ContactIcon />
      <p>ایجاد چت خصوصی</p>
    </li>
    <BasePopup :isShow="popup[POPUP_NAME]">
      <div class="create-private-chat-popup">
        <h1>چت خصوصی</h1>
        <BaseInputForm
          :focus="true"
          type="text"
          name="search"
          placeholder="جستجو"
        />
        <SmartUserList />
        <div class="actions">
          <button class="invite-user">دعوت دوستان</button>
          <button class="close">بستن</button>
        </div>
      </div>
    </BasePopup>
  </div>
</template>

<script setup>
import ContactIcon from "@/Components/Base/Icon/ContactIcon.vue";
import BasePopup from "@/Components/Base/Popup/BasePopup.vue";
const POPUP_NAME = "createPrivateChat";
import { useSystemStore } from "@/stores/system";
import { storeToRefs } from "pinia";
import BaseInputForm from "../../../Base/Form/BaseInputForm.vue";
import SmartUserList from "../../User/SmartUserList.vue";
const systemStore = useSystemStore();
const { popup } = storeToRefs(systemStore);
const { openPopup } = systemStore;
</script>

<style scoped lang="scss">
.creaet-private-chat .item img {
  background-color: $contact;
}
.create-private-chat-popup {
  ::v-deep(input) {
    width: 97%;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
}

.actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    font-size: 1.5rem;
    background-color: transparent;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    color: $swatch-light_2;
    &:hover {
      filter: brightness(140%);
    }
  }
}
</style>
