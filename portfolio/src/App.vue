<template>
  <!-- <div id="preloader">
    <div class="p">CHARGEMENT</div>
</div> -->
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #191d24;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
</style>
