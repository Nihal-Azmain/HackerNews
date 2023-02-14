<script setup>
import { ref } from "vue";
import axios from "axios";
import convertTime from "../components/GlobalFunctions/ConvertTime.js";
const prop = defineProps(["parent", "padding"]);
const details = ref(null);
// const show = false;
const apiCall = async () => {
  details.value = await axios.get(
    `https://hacker-news.firebaseio.com/v0/item/${prop.parent}.json?print=pretty`
  );
  //   const sanitizer = new Sanitizer();
  //   setHTML(details.value.data.text, { sanitizer });
  details.value.data.time = convertTime(details.value.data.time);
};

apiCall();
</script>

<template>
  <div>
    <article :style="{ paddingLeft: `${padding}px` }">
      <!-- BY -->
      <span v-if="details === null">Loading</span>
      <span v-else class="by">by {{ details.data.by }}</span>
      <!-- CREATION TIME -->
      <span class="divider">|</span>

      <span v-if="details === null">Loading</span>
      <span v-else class="date"> Created {{ details.data.time }} ago</span>
      <br />
      <span v-if="details === null">Loading</span>
      <p v-else v-html="details.data.text"></p>
      <!-- <br /> -->
      <!-- <div @click="CallChild">
        <span v-if="!show">Show Comments</span>
        <span v-else>Hide Comments</span>
      </div> -->
    </article>

    <div v-if="details?.data.kids">
      <ShowComments
        v-for="kid in details.data.kids"
        :key="kid"
        :parent="kid"
        :padding="padding + 50"
      />
    </div>
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
/* article span {
} */

article footer {
  margin: 0px;
  padding: 0px;
}
.divider {
  padding-left: 16px;
  padding-right: 16px;
}
.by {
  font-weight: bold;
}
.date {
  font-weight: bold;
}
</style>
