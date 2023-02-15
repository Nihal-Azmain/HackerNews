<script setup>
import { ref } from "vue";
import ConvertTime from "../components/GlobalFunctions/ConvertTime";
import axios from "axios";
const prop = defineProps(["uniqueId"]);
let success = ref(true);
const details = ref(null);
const api = `https://hacker-news.firebaseio.com/v0/item/${prop.uniqueId}.json?print=pretty`;

const apiCall = async () => {
  try {
    details.value = await axios.get(api);
    details.value.data.time = ConvertTime(details.value.data.time);
    success.value = true;
  } catch {
    success.value = false;
  }
};

apiCall();
</script>

<template>
  <article v-if="success">
    <!-- TITTLE -->
    <h6 v-if="details === null">Loading</h6>
    <div v-else>
      <h6 v-if="details.data.url">
        <a :href="details.data.url" target="_blank">
          {{ details.data.title }}
        </a>
      </h6>
      <h6 v-else>{{ details.data.title }}</h6>
    </div>

    <!-- SCORE -->
    <span v-if="details === null">Loading</span>
    <span v-else>{{ details.data.score }}</span>

    <!-- BY -->
    <span class="divider">|</span>

    <span v-if="details === null">Loading</span>
    <span v-else>by {{ details.data.by }}</span>

    <!-- COMMENTS -->
    <span class="divider" v-if="details !== null && details.data.descendants">
      |
    </span>

    <span v-if="details !== null && details.data.descendants">
      <router-link :to="`/items/${uniqueId}`">
        {{ details.data.descendants }} Comments
      </router-link>
    </span>

    <!-- CREATION TIME -->
    <span class="divider">|</span>

    <span v-if="details === null">Loading</span>
    <span v-else>Created {{ details.data.time }} ago</span>
  </article>

  <h1 class="error" v-else>404 NOT FOUND</h1>
</template>

<style scoped>
article {
  margin: 0px;
  padding: 5px;
}
article h6 {
  margin: 0px;
}
article span {
  padding-left: 16px;
}
article footer {
  margin: 0px;
  padding: 0px;
}
.divider {
  padding-left: 16px;
  padding-right: 16px;
}
.error {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
