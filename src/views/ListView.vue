<script setup>
import { useRoute } from "vue-router";
import { computed, watch } from "vue";
const route = useRoute();

const path = computed(() => route.name);
console.log(path.value);
</script>

<template>
  {{ path }}
  <article>
    <h6>Title</h6>
    <span>Footer</span>
  </article>

  <article>
    <h6>Title</h6>
    <span>Footer</span>
  </article>
  <article>
    <h6>Title</h6>
    <span>Footer</span>
  </article>
  <article>
    <h6>Title</h6>
    <span>Footer</span>
  </article>
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
</style>
