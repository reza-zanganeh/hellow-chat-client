import { defineStore } from "pinia";
export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    id: "",
    username: "",
    fullname: "",
    profilePictureSrc: "",
    rooms: [],
  }),
  actions: {
    getUserInfo() {},
  },
});
