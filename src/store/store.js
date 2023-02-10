import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    api: "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty",
    storyIds: [],
  },
  mutations: {
    changeApi(state, payload) {
      state.api = `https://hacker-news.firebaseio.com/v0/${payload}.json?print=pretty`;
    },
    getStories(state, payload) {
      state.storyIds = payload;
    },
  },
  actions: {
    async loadstories(context) {
      let data = await axios.get(context.state.api);
      console.log(data);
      context.commit("getStories", data);
    },
  },
});

export default store;
