import { createApp } from "vue";

import MainLayout from "./layout/MainLayout.vue";
import VueCookies from "vue-cookies";
import router from "./router/routes.js";

let app = createApp(MainLayout);
app.use(VueCookies);
app.use(router);

app.mount("#app");
