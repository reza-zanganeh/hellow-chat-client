import { defineStore } from "pinia";
export const useSystemStore = defineStore({
  id: "system",
  state: () => ({
    isLoading: false,
    isButtonLoading: false,
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
  },
});
