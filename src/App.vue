<script setup>
import NavBar from "./components/NavBar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <NavBar />
  <main class="container">
    <RouterView />
  </main>
</template>

<style scoped></style>
