import { defineStore } from "pinia";
import useAxios from "../Composable/useAxios";
const axiosInstance = useAxios();
export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    ids: [],
    entities: {},
  }),
  actions: {
    async getMyPrivateChat() {},
    async getPrivateChatDetailsById(id) {},
  },
});
