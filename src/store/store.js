import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    storyIds: [],
    page: 1,
    totalPage: 1,
    index: 0,
  },
  mutations: {
    getStories(state, payload) {
      state.storyIds = payload;
    },
    changeTotalPage(state) {
      state.totalPage = Math.ceil(state.storyIds.length / 25);
    },
    nextPage(state) {
      state.page = Math.min(state.page + 1, state.totalPage);
    },
    editCurrentPage(state) {
      state.page = 1;
    },
    previousPage(state) {
      state.page = Math.max(state.page - 1, 1);
    },
    changeIndex(state, index) {
      state.index = index;
    },
  },
  actions: {
    async loadstories(context, payload) {
      let data = await axios.get(
        `https://hacker-news.firebaseio.com/v0/${payload}.json?print=pretty`
      );
      context.commit("getStories", data.data);
    },
  },
  getters: {
    getCurrentPage(state) {
      return state.page;
    },
    getStartIndex(state) {
      return 25 * (state.page - 1);
    },
    getEndIndex(state) {
      return Math.min(state.page * 25, state.storyIds.length);
    },
    getTotalPage(state) {
      return state.totalPage;
    },
    getId(state) {
      return state.storyIds[state.index];
    },
  },
});

export default store;
