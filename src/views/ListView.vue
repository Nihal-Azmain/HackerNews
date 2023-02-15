<script setup>
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { ref, computed } from "vue";
import showLists from "../components/showLists.vue";
import store from "../store/store";

const route = useRoute();
let success = ref(true);
// let totalPages = ref();
// let currentPage = ref(0);
let start = computed(() => store.getters.getStartIndex);
let end = computed(() => store.getters.getEndIndex);
let totalPages = computed(() => store.getters.getTotalPage);
let currentPage = computed(() => store.getters.getCurrentPage);

async function callApi(route) {
  try {
    await store.dispatch("loadstories", route.params.type);
    success.value = true;
    store.commit("changeTotalPage");
    store.commit("editCurrentPage");
    console.log(totalPages.value);
    // let start = computed(() => store.getters.getStartIndex);
    // let end = computed(() => store.getters.getEndIndex);
  } catch {
    success.value = false;
  }
}

callApi(route);

onBeforeRouteUpdate((to, from, next) => {
  callApi(to);
  next();
});

function goToNext() {
  store.commit("nextPage");
  console.log(start.value);
  console.log(end.value);
  // currentPage.value = computed(() => store.getters.getCurrentPage);
  // start.value = computed(() => store.getters.getStartIndex);
  // end.value = computed(() => store.getters.getEndIndex);
}

function goToPrevious() {
  store.commit("previousPage");
  // currentPage.value = computed(() => store.getters.getCurrentPage);
  // start.value = computed(() => store.getters.getStartIndex);
  // end.value = computed(() => store.getters.getEndIndex);
}
</script>

<template>
  {{ route.name }}
  <div v-if="success" :key="{ page: currentPage, route: route.name }">
    <showLists v-for="index in end - start" :key="index" :index="index" />
  </div>
  <h1 class="error" v-else>404 NOT FOUND</h1>

  <div class="navigation">
    <button @click="goToPrevious">&#60;</button>
    <span>{{ currentPage }} of {{ totalPages }}</span>
    <button @click="goToNext">&#62;</button>
  </div>
</template>

<style scoped>
.error {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.navigation button {
  width: 20px;
  height: 20px;
  color: white;
  margin: 0px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.navigation {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.navigation span {
  padding-left: 5px;
  padding-right: 5px;
}
</style>
