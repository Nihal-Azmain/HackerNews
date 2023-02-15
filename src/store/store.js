import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    storyIds: [],
  },
  mutations: {
    changeApi(state, payload) {
      // console.log(payload);
      state.api = `https://hacker-news.firebaseio.com/v0/${payload}.json?print=pretty`;
    },
    getStories(state, payload) {
      state.storyIds = payload;
    },
  },
  actions: {
    async loadstories(context, payload) {
      console.log(payload);
      let data = await axios.get(
        `https://hacker-news.firebaseio.com/v0/${payload}.json?print=pretty`
      );
      context.commit("getStories", data.data);
    },
  },
});

export default store;
