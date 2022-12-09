import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";

import "vant/lib/index.css";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("./pages/home/index.vue"),
    },
    {
      path: "/detail",
      component: () => import("./pages/detail/index.vue"),
    },
  ],
});

createApp(App).use(router).mount("#app");
