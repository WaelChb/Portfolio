<template>
  <div class="container4">
    <div class="title2">
      <h3>Mes projets</h3>
      <br />
      <br />
    </div>
    <section class="scroll">
      <div class="contenu2" ref="scrollContent">
        <div class="card3" v-for="(card, index) in cards" :key="index">
          <div class="card-image"></div>
          <p class="card-title">{{ card.title }}</p>
          <p v-html="card.body"></p>
        </div>
      </div>
      <button class="scroll-button left" @click="scrollLeft">
        <img
          src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
          alt="Left Arrow"
          width="10px"
        />
      </button>
      <br />
      <button class="scroll-button right" @click="scrollRight">
        <img
          src="https://cdn-icons-png.flaticon.com/512/566/566093.png"
          alt="Right Arrow"
          width="10px"
        />
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: "ProjetListe",
  data() {
    return {
      cards: [
        {
          title: "Filtre Web:  ",
          body: "Je vis tres loin d'ici et j'ai <br>",
        },
        {
          title: "Card title",
          body: "lorem",
        },
        {
          title: "Card title",
          body: "lore3m",
        },
        {
          title: "Card title",
          body: "lorem",
        },
        {
          title: "Card title",
          body: "lorem",
        },
        {
          title: "Card title",
          body: "lorem",
        },
        {
          title: "Card title",
          body: "lorem",
        },
        {
          title: "Card title",
          body: "lorem",
        },
        {
          title: "Card title",
          body: "lorem",
        },
        {
          title: "Card title",
          body: "lorem",
        },
      ],
    };
  },
  methods: {
    scrollLeft() {
      const scrollContent = this.$refs.scrollContent;
      if (scrollContent) {
        const currentScrollLeft = scrollContent.scrollLeft;
        const scrollStep = 400; // Ajustez la vitesse de défilement selon vos besoins
        const newScrollLeft = currentScrollLeft - scrollStep;
        this.scrollTo(scrollContent, newScrollLeft, 500); // 500 est la durée de l'animation en millisecondes
      }
    },
    scrollRight() {
      const scrollContent = this.$refs.scrollContent;
      if (scrollContent) {
        const currentScrollLeft = scrollContent.scrollLeft;
        const scrollStep = 400; // Ajustez la vitesse de défilement selon vos besoins
        const newScrollLeft = currentScrollLeft + scrollStep;
        this.scrollTo(scrollContent, newScrollLeft, 500); // 500 est la durée de l'animation en millisecondes
      }
    },
    scrollTo(element, to, duration) {
      if (duration <= 0) return;
      const difference = to - element.scrollLeft;
      const perTick = (difference / duration) * 10;

      setTimeout(() => {
        element.scrollLeft = element.scrollLeft + perTick;
        if (element.scrollLeft === to) return;
        this.scrollTo(element, to, duration - 10);
      }, 10);
    },
  },
};
</script>

<style>
* {
  color: white;
}
.container4 {
  margin-right: auto;
  margin-left: auto;
  padding-right: 350px;
  padding-left: 350px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.scroll {
  white-space: nowrap;
  width: 100%;
  padding: 10px;
}

.scroll-button {
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
}

.scroll-button.left {
  left: 0;
}

.scroll-button.right {
  right: 0;
}

.scroll::-webkit-scrollbar {
  width: 1px; /* Largeur de la barre de défilement */
}

.scroll::-webkit-scrollbar-track {
  background: #191d24; /* Couleur de l'arrière-plan de la piste */
}

.scroll::-webkit-scrollbar-thumb {
  background: #888; /* Couleur de la poignée de défilement */
  border-radius: 5px; /* Arrondi de la poignée */
}
.title2 {
  margin-top: 100px;
}

h3 {
  font-size: 30px;
}

.contenu2 {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  width: 100%;
  padding: 20px;
  overflow-x: scroll;
}

.card3 {
  padding: 35px;
  width: 200px;
  border-radius: 20px;
  background: #212121;
  box-shadow: 5px 5px 8px #1b1b1b, -5px -5px 8px #272727;
  transition: 0.4s;
}

.card3:hover {
  translate: 0 -10px;
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  margin: 5px;
}

.card-image {
  min-height: 140px;
  background-color: #313131;
  border-radius: 15px;
  background: #313131;
  box-shadow: inset 5px 5px 3px #2f2f2f, inset -5px -5px 3px #333333;
}

.card-body {
  margin: 3px;
  color: rgb(184, 184, 184);
  font-size: 15px;
}

@media screen and (max-width: 1366px) {
  .scroll {
    white-space: nowrap;
    width: 200%;
    padding: 10px;
  }
}
</style>
