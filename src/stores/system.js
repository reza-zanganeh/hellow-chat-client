import { defineStore } from "pinia";
export const useSystemStore = defineStore({
  id: "system",
  state: () => ({
    isLoading: false,
    isButtonLoading: false,
    rightMenuIsOpen: false,
    backdropIsOpen: false,
    activePopup: null,
    popup: {
      createPrivateChat: false,
    },
  }),
  actions: {
    activeLoading() {
      this.isLoading = true;
    },
    disActiveLoading() {
      this.isLoading = false;
    },
    activeButtonLoading() {
      this.isButtonLoading = true;
    },
    disActiveButtonLoading() {
      this.isButtonLoading = false;
    },
    openBackdrop() {
      this.backdropIsOpen = true;
    },
    closeBackdrop() {
      this.backdropIsOpen = false;
      this.rightMenuIsOpen = false;
      if (this.activePopup) this.popup[this.activePopup] = false;
    },
    openRightMenu() {
      this.rightMenuIsOpen = true;
      this.openBackdrop();
    },
    closeRightMenu() {
      this.rightMenuIsOpen = false;
    },
    openPopup(popupName) {
      this.closeRightMenu();
      this.openBackdrop();
      setTimeout(() => {
        this.activePopup = popupName;
        this.popup[popupName] = true;
      }, 600);
    },
    closePopup(popupName = this.activePopup) {
      this.popup[popupName] = false;
    },
  },
});
