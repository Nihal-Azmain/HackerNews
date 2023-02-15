<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

let activeClass = ref({
  topstories: true,
  newstories: false,
  beststories: false,
  showstories: false,
  askstories: false,
  jobstories: false,
});

watch(
  route,
  () => {
    for (const key in activeClass.value) activeClass.value[key] = false;
    activeClass.value[route.params.type] = true;
  },
  { immediate: true }
);
</script>

<template>
  <header class="navbar">
    <nav class="container">
      <div class="brand-logo">
        <RouterLink
          to="/topstories"
          :class="{ active: activeClass.topstories }"
        >
          <strong> HackerNews</strong>
        </RouterLink>
      </div>

      <ul>
        <li>
          <RouterLink
            to="/newstories"
            :class="{ active: activeClass.newstories }"
          >
            New
          </RouterLink>
        </li>

        <li>
          <RouterLink
            to="/beststories"
            :class="{ active: activeClass.beststories }"
          >
            Best
          </RouterLink>
        </li>

        <li>
          <RouterLink
            to="/showstories"
            :class="{ active: activeClass.showstories }"
          >
            Show
          </RouterLink>
        </li>

        <li>
          <RouterLink
            to="/askstories"
            :class="{ active: activeClass.askstories }"
          >
            Ask
          </RouterLink>
        </li>

        <li>
          <RouterLink
            to="/jobstories"
            :class="{ active: activeClass.jobstories }"
          >
            Jobs
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  background-color: darkorange;
}

.navbar ul li a {
  color: white;
  font-size: 16px;
}
.navbar .brand-logo {
  display: flex;
  align-items: center;
}
.navbar .brand-logo a {
  color: ghostwhite;
  font-weight: bold;
  font-size: 24px;
}

.navbar .brand-logo a:focus {
  background-color: transparent;
}
.active {
  text-decoration: underline;
}
</style>
