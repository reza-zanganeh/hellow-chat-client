import { defineStore } from "pinia";
export const useSystemStore = defineStore({
  id: "system",
  state: () => ({
    isLoading: false,
    isButtonLoading: false,
    rightMenuIsOpen: false,
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
    openRightMenu() {
      this.rightMenuIsOpen = true;
    },
    closeRightMenu() {
      this.rightMenuIsOpen = false;
    },
  },
});
