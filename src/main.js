import "@/assets/css/normalize.css";
import "@/assets/css/layout.scss";
import "element-plus/dist/index.css";
import "v-calendar/dist/style.css";

import { createApp } from "vue";
import App from "./App.vue";

import axios from "axios";
import store from "./store.js";
import { router } from "./router";

import ElementPlus from "element-plus";
import VCalendar from "v-calendar";

import mdiVue from "mdi-vue/v3";
import * as mdijs from "@mdi/js";
import { func } from "./function";

const app = createApp(App);

app.config.globalProperties.$axios = axios;
app.config.globalProperties.$func = func;

app.use(ElementPlus, {
  size: "small",
  zIndex: 3000,
});
app.use(VCalendar, {});

app.use(mdiVue, {
  icons: mdijs,
});

app.use(store);
app.use(router);
app.mount("#app");
