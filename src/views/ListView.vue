<script setup>
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { ref, computed } from "vue";
import showLists from "../components/showLists.vue";
import store from "../store/store";

const route = useRoute();

let stories = computed(() => store.getters.getStories);
let success = ref(true);
let totalPages = ref();
let currentPage = ref(0);
let start = ref(0);
let end = ref(Math.min(start.value + 25, stories.value.length));

async function callApi(route) {
  try {
    await store.dispatch("loadstories", route.params.type);
    success.value = true;
    totalPages.value = Math.ceil(stories.value.length / 25);
    currentPage.value = 1;
    start.value = 0;
    end.value = Math.min(start.value + 25, stories.value.length);
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
  currentPage.value = Math.min(currentPage.value + 1, totalPages.value);
  start.value = 25 * (currentPage.value - 1);
  end.value = Math.min(start.value + 25, stories.value.length);
}

function goToPrevious() {
  currentPage.value = Math.max(currentPage.value - 1, 1);
  start.value = 25 * (currentPage.value - 1);
  end.value = Math.min(start.value + 25, stories.value.length);
}
</script>

<template>
  <div v-if="success" :key="{ page: currentPage, route: route.name }">
    <showLists
      v-for="index in end - start"
      :key="stories[start + index - 1]"
      :unique-id="stories[start + index - 1]"
    />
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
