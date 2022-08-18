import axios from "axios";
import { useToast } from "vue-toastification";
import useLocalStorge from "@/Composable/useLocalStorge.js";
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASE_URL,
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});
const toast = useToast();
const { getAuthDataFromBrowserStorge } = useLocalStorge();
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const authData = getAuthDataFromBrowserStorge();
    if (toast) config.headers.accesstoken = authData.token;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status == 400) {
      toast.warning(
        error.response.data.message.persian ||
          "فرایند شکست خورد لطفا مجددا تلاش کنید"
      );
    }
  }
);

export default function () {
  return axiosInstance;
}
