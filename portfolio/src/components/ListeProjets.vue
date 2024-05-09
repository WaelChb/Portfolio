<template>
  <div>
    <h2>Mes Projets</h2>
    <section class="two">
      <h1>two</h1>
      <NavigationBar></NavigationBar>
    </section>
  </div>
</template>

<script>
import NavigationBar from "./NavigationBar.vue";
export default {
  name: "ListeProjets",
  components: {
    NavigationBar,
  },
};
</script>

<style scoped></style>
