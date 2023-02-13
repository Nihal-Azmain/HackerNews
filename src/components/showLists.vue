<script setup>
import { ref } from "vue";
import axios from "axios";
const prop = defineProps(["uniqueId"]);
const details = ref(null);
const api = ref(
  `https://hacker-news.firebaseio.com/v0/item/${prop.uniqueId}.json?print=pretty`
);

const apiCall = async () => {
  details.value = await axios.get(api.value);
};
apiCall();
</script>

<template>
  <article>
    <h6 v-if="details === null">Loading</h6>
    <h6 v-else>{{ details.data.title }}</h6>

    <span v-if="details === null">Loading</span>
    <span v-else>{{ details.data.score }}</span>

    <span class="divider">|</span>

    <span v-if="details === null">Loading</span>
    <span v-else>by {{ details.data.by }}</span>

    <span class="divider">|</span>

    <span v-if="details === null">Loading</span>
    <span v-else>Created {{ details.data.time }} hours ago</span>

    <span class="divider">|</span>

    <span v-if="details === null">" "</span>
    <span v-else>{{ details.data.descendants }} Comments</span>
  </article>
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
</style>
