import { createStore } from "vuex";

const store = createStore({
  state: {
    api: "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty",
    storyIds: [],
  },
  mutations: {},
  actions: {},
});

export default store;
