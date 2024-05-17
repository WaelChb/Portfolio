<template>
  <div>
    <button @click="startAnimation">Démarrer l'animation</button>
    <div ref="box" class="box">Anime.js avec Vue.js</div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";

export default {
  name: "AnimeComponent",
  methods: {
    startAnimation() {
      anime({
        targets: this.$refs.box,
        translateX: 250,
        rotate: "1turn",
        backgroundColor: "#FFF",
        duration: 800,
      });
    },
  },
};
</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: #f00;
}
</style>
