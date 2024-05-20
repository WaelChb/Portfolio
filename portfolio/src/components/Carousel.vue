<template>
  <div class="carousel">
    <p
      v-for="(paragraphe, index) in paragraphes"
      :key="index"
      :class="{ active: index === currentIndex }"
    >
      {{ paragraphe }}
    </p>
    <div class="centerP">
      <p
        v-for="(auteur, index) in auteurs"
        :key="index"
        :class="{ active: index === currentIndexAuteur }"
      >
        {{ auteur }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselVue",
  data() {
    return {
      paragraphes: [
        "La programmation ne concerne pas ce que vous savez , elle concerne ce que vous pouvez découvrir.",
        "Dans la programmation, l'erreur est humaine, mais la persévérance est suprême.",
        "La programmation est une compétence que vous perfectionnez toute votre vie.",
      ],
      auteurs: ["-Chris Pine", "-Ajay Naidu", "-David Nolen"],
      currentIndex: 0,
      currentIndexAuteur: 0,
    };
  },
  mounted() {
    this.startCarousel();
  },
  methods: {
    startCarousel() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.paragraphes.length;
        this.currentIndexAuteur =
          (this.currentIndexAuteur + 1) % this.auteurs.length;
      }, 5000);
    },
  },
};
</script>

<style scoped>
.carousel p {
  display: none;
}
.carousel p.active {
  display: block;
}
.centerP {
  text-align: center;
}
@media (max-width: 600px) {
  .carousel {
    padding: 10px;
  }

  .carousel p {
    font-size: 10px;
  }

  .centerP {
    margin-top: 10px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .carousel {
    margin-top: -30px;
  }
}
</style>
