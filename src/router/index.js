import { createRouter, createWebHistory } from "vue-router";
import ListView from "../views/ListView.vue";
import HomeView from "../views/HomeView.vue";
import TopStoriesView from "../views/TopStoriesView.vue";
import detailsView from "../views/detailsView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      children: [
        {
          path: ":type",
          name: "StoryList",
          component: ListView,
        },
        {
          path: "",
          name: "TopStories",
          component: TopStoriesView,
        },
      ],
    },
    {
      path: "/items/:id",
      name: "details",
      component: detailsView,
    },
  ],
});

export default router;
