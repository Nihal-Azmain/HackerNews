import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    storyIds: [],
  },
  mutations: {
    setStories(state, payload) {
      state.storyIds = payload;
    },
  },
  actions: {
    async loadstories({ commit }, payload) {
      let data = await axios.get(
        `https://hacker-news.firebaseio.com/v0/${payload}.json?print=pretty`
      );
      commit("setStories", data.data);
    },
  },
  getters: {
    getStories(state) {
      return state.storyIds;
    },
  },
});

export default store;
