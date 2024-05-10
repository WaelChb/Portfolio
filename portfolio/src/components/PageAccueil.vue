<template>
  <div class="container">
    <section class="one">
      <NavigationBar />
      <AccueilContenu />
    </section>
    <section class="two">
      <APropos />
    </section>
    <section class="three">
      <ProjetListe />
    </section>
  </div>
</template>

<script>
import NavigationBar from "./NavigationBar.vue";
import AccueilContenu from "./AccueilContenu.vue";
import APropos from "./APropos.vue";
import ProjetListe from "./Projet.vue";

export default {
  name: "PageAccueil",
  components: {
    NavigationBar,
    AccueilContenu,
    APropos,
    ProjetListe,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Poppins", sans-serif;
}

header {
  height: 100vh;
  width: 100vh;
}
.container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
  scroll-behavior: smooth;
}

section {
  height: 100vh;
  scroll-snap-align: start;
}
.one {
  background-color: #191d24;
}
.two {
  background-color: #191d24;
}
.three {
  background-color: #191d24;
}
</style>
