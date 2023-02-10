<script setup>
import { useRoute } from "vue-router";
import { computed, watch, ref } from "vue";
import showLists from "../components/showLists.vue";
import store from "../store/store";
const route = useRoute();

let stories = ref([]);
let success = ref(false);
const path = computed(() => route.name);

watch(
  path,
  async (newPath) => {
    store.commit("changeApi", newPath);
    try {
      await store.dispatch("loadstories");
      stories.value = store.state.storyIds;
      success.value = true;
    } catch {
      success.value = false;
    }
  },
  { immediate: true }
);
</script>

<template>
  {{ route.name }}
  <div v-if="success">
    <showLists v-for="story in stories" :key="story" :unique-id="story" />
  </div>
  <h1 class="eror" v-else>404 NOT FOUND</h1>
</template>

<style>
.error {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
