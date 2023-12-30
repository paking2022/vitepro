import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/home/index.vue";
const routes = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/discover",
      name: "discover",
      component: () => import("../views/discover/index.vue"),
    },
  ],
});

export default routes;
