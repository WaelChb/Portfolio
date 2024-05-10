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
  width: 10px; /* Largeur de la barre de défilement */
}

::-webkit-scrollbar-track {
  background: #191d24; /* Couleur de l'arrière-plan de la piste */
}

::-webkit-scrollbar-thumb {
  background: #888; /* Couleur de la poignée de défilement */
  border-radius: 5px; /* Arrondi de la poignée */
}
</style>
