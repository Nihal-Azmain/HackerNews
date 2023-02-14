<script setup></script>

<template>
  <header class="navbar">
    <nav class="container">
      <div class="brand-logo">
        <RouterLink to="/topstories"><strong>HackerNews</strong></RouterLink>
      </div>
      <ul>
        <li><RouterLink to="/newstories">New</RouterLink></li>
        <li><RouterLink to="/beststories">Best</RouterLink></li>
        <li><RouterLink to="/showstories">Show</RouterLink></li>
        <li><RouterLink to="/askstories">Ask</RouterLink></li>
        <li><RouterLink to="/jobstories">Jobs</RouterLink></li>
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
</style>
