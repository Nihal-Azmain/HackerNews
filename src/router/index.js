import { createRouter, createWebHistory } from "vue-router";
import ListView from "../views/ListView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "topstories",
      component: ListView,
    },
    {
      path: "/ask",
      name: "askstories",
      component: ListView,
    },
    {
      path: "/best",
      name: "beststories",
      component: ListView,
    },
    {
      path: "/new",
      name: "newstories",
      component: ListView,
    },
    {
      path: "/show",
      name: "showstories",
      component: ListView,
    },
    {
      path: "/jobs",
      name: "jobstories",
      component: ListView,
    },
  ],
});

export default router;
