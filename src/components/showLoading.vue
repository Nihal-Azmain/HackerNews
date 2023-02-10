<script setup></script>

<template>
  <div>
    <article v-for="index in 25" :key="index">
      <h6>Loading</h6>
      <span>Loading</span>
      <span class="divider">|</span>
      <span>Loading</span>
      <span class="divider">|</span>
      <span>Loading</span>
      <span class="divider">|</span>
      <span>Loading</span>
    </article>
  </div>
</template>

<style scoped>
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
