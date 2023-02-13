<script setup>
import { useRoute } from "vue-router";
import { computed, watch, ref } from "vue";
import showLists from "../components/showLists.vue";
import store from "../store/store";
const route = useRoute();

let stories = ref([]);
let success = ref(false);
const path = computed(() => route.name);
let totalPages = ref();
let currentPage = ref(0);
let start = ref(0);
let end = ref(Math.min(start.value + 25, stories.value.length));

watch(
  path,
  async (newPath) => {
    store.commit("changeApi", newPath);
    try {
      await store.dispatch("loadstories");
      stories.value = store.state.storyIds;
      success.value = true;
      totalPages.value = Math.ceil(stories.value.length / 25);
      currentPage.value = 1;
      start.value = 0;
      end.value = Math.min(start.value + 25, stories.value.length);
    } catch {
      success.value = false;
    }
  },
  { immediate: true }
);

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
  {{ route.name }}
  <div v-if="success" :key="{ page: currentPage, route: route.name }">
    <showLists
      v-for="index in end - start"
      :key="index"
      :unique-id="stories[start + index - 1]"
    />
  </div>
  <h1 class="error" v-else>Loading</h1>

  <div class="navigation">
    <button @click="goToPrevious">&#60;</button>
    <span>{{ currentPage }} of {{ totalPages }}</span>
    <button @click="goToNext">&#62;</button>
  </div>
</template>

<style>
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
