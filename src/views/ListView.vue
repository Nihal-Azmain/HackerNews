<script setup>
import { useRoute } from "vue-router";
import { computed, watch } from "vue";
import lists from "../components/lists.vue";
const route = useRoute();

const path = computed(() => route.name);
</script>

<template>
  {{ path }}
  <lists />
</template>

<style>
article {
  margin: 0px;
  padding: 5px;
}
article h6 {
  margin: 0px;
}
article footer {
  margin: 0px;
  padding: 0px;
}
.divider {
  padding-left: 16px;
  padding-right: 16px;
}
</style>
