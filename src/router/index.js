import { createRouter, createWebHistory } from "vue-router";
import ListView from "../views/ListView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ListView,
    },
    {
      path: "/ask",
      name: "ask",
      component: ListView,
    },
    {
      path: "/best",
      name: "best",
      component: ListView,
    },
    {
      path: "/new",
      name: "new",
      component: ListView,
    },
    {
      path: "/show",
      name: "show",
      component: ListView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: ListView,
    },
  ],
});

export default router;
