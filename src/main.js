import { createApp } from "vue";
import { createPinia } from "pinia";
import Toast, { POSITION } from "vue-toastification";
import VueVirtualScroller from "vue3-virtual-scroller";
import App from "./App.vue";
import router from "./router";

import "vue3-virtual-scroller/dist/vue3-virtual-scroller.css";
import "vue-toastification/dist/index.css";
import "@/assets/sass/plugin/_toastification.scss";
import "@/assets/sass/base/_base.scss";
import "@/assets/sass/base/_typography.scss";
import "@/assets/sass/base/_util.scss";

// vee-validate
import "./plugin/vee-validate/vee-validate.js";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Toast, {
  position: POSITION.BOTTOM_RIGHT,
});
app.use(VueVirtualScroller);

app.mount("#app");
