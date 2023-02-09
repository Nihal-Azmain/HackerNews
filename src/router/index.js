import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/ask",
      name: "ask",
      component: () => import("../views/AskView.vue"),
    },
    {
      path: "/best",
      name: "best",
      component: () => import("../views/BestView.vue"),
    },
    {
      path: "/new",
      name: "new",
      component: () => import("../views/NewView.vue"),
    },
    {
      path: "/show",
      name: "show",
      component: () => import("../views/ShowView.vue"),
    },
    {
      path: "/jobs",
      name: "jobs",
      component: () => import("../views/JobsView.vue"),
    },
  ],
});

export default router;
