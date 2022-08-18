import { defineStore } from "pinia";
import useAxios from "../Composable/useAxios";
import useLocalStorge from "../Composable/useLocalStorge";
const { saveAuthDataOnBrowserStorge, getAuthDataFromBrowserStorge } =
  useLocalStorge();
const axiosInstance = useAxios();
export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    fullname: "",
    username: "",
    profilePictureSrc: "",
    accesstoken: null,
    expiresIn: null,
  }),
  getters: {
    isAuth: (state) => Boolean(state.accesstoken && state.username),
  },
  actions: {
    saveAuthData(data) {
      this.accesstoken = data.token;
      this.expiresIn = data.expiresIn;
      this.profilePictureSrc = data.profilePictureSrc;
      this.fullname = data?.fullname;
      this.username = data?.username;
      saveAuthDataOnBrowserStorge(data);
    },
    async login({ username, password }) {
      const result = await axiosInstance.post("auth/login", {
        username,
        password,
      });
      if (!result) return false;
      this.saveAuthData(result.data.data);
      return true;
    },
    async register({ fullname, username, password, otpCode }) {
      const result = await axiosInstance.post("auth/register", {
        fullname,
        username,
        password,
        otpCode,
      });
      if (!result) return false;
      this.saveAuthData({
        ...result.data.data,
        fullname,
        username,
      });
      return true;
    },
    async sendOtpRequest({ email }) {
      const result = await axiosInstance.post("/auth/request-otp-to-email", {
        email,
      });
      if (!result) return false;
      this.accesstoken = result.data.data.token;
      this.expiresIn = result.data.data.expiresIn;
      saveAuthDataOnBrowserStorge(result.data.data);
      return true;
    },
    resetAuth() {
      this.$reset();
    },
    autoSetInfoFromBrowserStorge() {
      const authData = getAuthDataFromBrowserStorge();
      this.accesstoken = authData.token;
      this.expiresIn = authData.expiresIn;
      this.fullname = authData?.fullname;
      this.username = authData?.username;
      this.profilePictureSrc = authData?.profilePictureSrc;
    },
  },
});
