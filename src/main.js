import { createApp } from "vue";
import mitt from "mitt";
import App from "./App.vue";
import router from "./router";

import "./assets/styles/tailwind.css";
import "./assets/styles/global.css";

import { registerGlobalComponents } from "./utils/import";

import { projectAuth } from "./configs/firebase";

let app;

projectAuth.onAuthStateChanged(() => {
  if (!app) {
    const emitter = mitt();
    app = createApp(App);

    registerGlobalComponents(app);

    app.use(router);

    app.config.globalProperties.emitter = emitter;
    app.mount("#app");
  }
});
