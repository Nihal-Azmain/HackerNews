<script setup>
import ShowComments from "../components/ShowComments.vue";
import ConvertTime from "../components/GlobalFunctions/ConvertTime";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import { ref } from "vue";
import axios from "axios";

const route = useRoute();
const details = ref(null);
let success = ref(true);

async function callApi(route) {
  try {
    details.value = await axios.get(
      `https://hacker-news.firebaseio.com/v0/item/${route.params.id}.json?print=pretty`
    );
    details.value.data.time = ConvertTime(details.value.data.time);
    success.value = true;
  } catch {
    success.value = false;
  }
}

callApi(route);

onBeforeRouteUpdate((to, from, next) => {
  callApi(to);
  next();
});
</script>

<template>
  <div>comments</div>

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

    <!-- CREATION TIME -->
    <span class="divider">|</span>

    <span v-if="details === null">Loading</span>
    <span v-else>Created {{ details.data.time }} ago</span>
  </article>
  <h1 class="error" v-else>404 NOT FOUND</h1>
  <div v-if="success && details?.data.kids">
    <ShowComments
      v-for="kid in details.data.kids"
      :key="kid"
      :parent="kid"
      :padding="5"
    />
  </div>
</template>

<style scoped>
article {
  margin: 0px;
  margin-bottom: 30px;
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
