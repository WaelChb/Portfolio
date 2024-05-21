<template>
  <div class="container4">
    <div class="title2">
      <h3>Mes projets</h3>
      <br />
      <br />
    </div>
    <section class="scroll">
      <div class="chevron">
        <button class="scroll-button left" @click="scrollLeft">
          <img
            class="tourne"
            src="https://www.nicepng.com/png/full/246-2461230_fleche-gauche-fleche-droite-carroubot1-carroubot2-flche-blanche.png"
            alt="Left Arrow"
            width="25px"
          />
        </button>
        <button class="scroll-button right" @click="scrollRight">
          <img
            src="https://www.nicepng.com/png/full/246-2461230_fleche-gauche-fleche-droite-carroubot1-carroubot2-flche-blanche.png"
            alt="Right Arrow"
            width="25px"
          />
        </button>
      </div>
      <div class="contenu2" ref="scrollContent">
        <div class="card3" v-for="(card, index) in cards" :key="index">
          <div class="card-image">
            <img
              :src="card.img"
              :width="card.width"
              :height="card.height"
              alt=""
              style="border-radius: 10px"
            />
          </div>
          <p class="card-title">{{ card.title }}</p>
          <p v-html="card.body"></p>
          <div class="card__links">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                class="svg"
              >
                &lt;
                <path
                  d="M562.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L405.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C189.5 251.2 196 330 246 380c56.5 56.5 148 56.5 204.5 0L562.8 267.7zM43.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C57 372 57 321 88.5 289.5L200.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C416.5 260.8 410 182 360 132c-56.5-56.5-148-56.5-204.5 0L43.2 244.3z"
                ></path>
              </svg>
              <a class="link" :href="card.link">Lien du projet</a>
            </div>
          </div>
        </div>
      </div>
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
          body: "Projet professionnel réalisé <br>en C# .net MVC5 SQL et <br>Entity FrameWork, Filtre Web <br>est une application web <br>destiné aux opérateurs de <br> chez Ophtalmic Compagnie.",
          img: "https://i.ibb.co/1f7CCF9/Image1.jpg",
          link: "https://github.com/WaelChb/Filtre",
          height: "138px",
          width: "200px",
        },
        {
          title: "Portfolio:",
          body: "Projet personnel, réalisé à <br>l'aide du framework Vue js <br>programmé de manière <br> dynamique.<br><br><br> ",
          img: "https://i.ibb.co/WpGDkwJ/Capture.png",
          link: "https://github.com/WaelChb/Portfolio",
          height: "140px",
          width: "200px",
        },
        {
          title: "Uber Eats clone:",
          body: "Projet personnel, clone <br>d'Uber Eats développé en<br> utilisant le framework Vue.js.<br> Inspiré par la popularité et<br> la fonctionnalité de <br>l'application originale. ",
          img: "https://i.ibb.co/37tg7Kq/Capture.png",
          link: "https://github.com/WaelChb/UbearEat-Clone",
          height: "140px",
          width: "200px",
        },
        {
          title: "Baby Foot Connecté:",
          body: "Le projet de baby-foot <br>connecté est un projet <br>scolaire développé en <br>Node.js pour l'api et pour le<br> coté objet connécté en <br>Arduino.",
          link: "https://github.com/WaelChb/Baby-Foot-Connecte/tree/Wael",
          img: "https://i.ibb.co/PMjGcQs/Capture.png",
          height: "140px",
          width: "200px",
        },
        {
          title: "Licence développeur:",
          body: "Le projet de fin d'études de <br>2024 est une plateforme web <br>dynamique et interactive <br>dédiée à mettre en valeur les <br>compétences et les <br>réalisations des étudiants",
          img: "https://i.ibb.co/zmNRmfK/Capture.png",
          link: "https://github.com/WaelChb/LPWD-2024-Web-Project",
          height: "140px",
          width: "200px",
        },
        {
          title: "Site boulangerie :",
          body: "En 2020, lors de mon stage <br>pour mon BTS, j'ai réalisé <br>mon premier projet web la <br>création d'un site web en <br>utilisant HTML, CSS et PHP.<br><br>",
          img: "https://i.ibb.co/hH8bvps/Capture.png",
          link: "https://linkorporation.com/",
          height: "140px",
          width: "200px",
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

.tourne {
  transform: rotate(180deg);
}

.chevron {
  display: flex;
  justify-content: space-between;
  margin-left: 45px;
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
  width: 1px;
}

.scroll::-webkit-scrollbar-track {
  background: #191d24;
}

.scroll::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

.svg {
  width: 25px;
  height: 25px;
  transform: translateY(25%);
  fill: var(--font-color);
}

.card__links {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
}
.card__links .link:hover {
  text-decoration: underline;
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
  color: #fdd995;
  margin: 5px;
}

.card-image {
  height: 140px;
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

  .title2 {
    margin-top: 0px;
  }
  .contenu2 {
    gap: 20px;
    width: 100%;
    padding: 20px;
    height: 430px;
  }
}
@media only screen and (max-width: 767px) {
  .container4 {
    padding: 0 10px;
    padding-right: 85px;
    padding-left: 85px;
  }
  h3 {
    font-size: 25px;
  }
  .title2 {
    margin-top: 100px;
  }
  .contenu2 {
    gap: 10px;
  }
  .card3 {
    flex: 0 0 160px;
    padding: 15px;
  }
  .card-title {
    font-size: 1em;
  }
  .card-body {
    font-size: 0.8em;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .container4 {
    padding: 0 10px;
    padding-right: 145px;
    padding-left: 145px;
  }
  .title2 {
    margin-top: 100px;
  }
  .contenu2 {
    gap: 10px;
  }
  .card3 {
    flex: 0 0 160px;
    padding: 15px;
  }
  .card-title {
    font-size: 1em;
  }
  .card-body {
    font-size: 0.8em;
  }
}
</style>
