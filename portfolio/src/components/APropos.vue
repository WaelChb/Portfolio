<template>
  <div class="container3">
    <div class="titleee">
      <h3>À Propos</h3>
      <br />
    </div>
    <div class="contenu">
      <div class="card">
        <div class="img"><img src="../assets/W.png" width="80px" alt="" /></div>
        <span>Présentation</span>
        <p class="info">
          Je m'appelle Wael Churbaji, j'ai 23 ans. Depuis l'âge de 12 ans, je
          suis passionné par le développement informatique.<br /><br />
          J'ai obtenu un baccalauréat STI2D, suivi d'un BTS SIO option en
          SLAM.<br /><br />
          Actuellement, je suis en licence professionnelle développeur web, avec
          une spécialisation en objets connectés.
        </p>

        <button></button>
      </div>

      <section>
        <div class="passion">
          <div class="main_card" v-for="item in items" :key="item.id">
            <div class="background"></div>
            <div class="cool_card_logo">
              <p>{{ item.name }}</p>
              <br />
              <div class="img-center">
                <img :src="item.img" width="40px" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="centered">
          <DescriptionAPropos></DescriptionAPropos>
        </div>
      </section>
    </div>
    <br />
    <CarouselVue></CarouselVue>
  </div>
</template>

<script>
import DescriptionAPropos from "./Description.vue";
import CarouselVue from "./Carousel.vue";
export default {
  components: {
    DescriptionAPropos,
    CarouselVue,
  },

  name: "APropos",
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Autonome",
          img: "https://trottinvosges.fr/wp-content/uploads/2022/08/trottin-vosges-balade-trottinette-electrique-montagne-activite-sport-batterie.png",
        },
        {
          id: 2,
          name: "Rigoureux",
          img: "https://cdn.iconscout.com/icon/free/png-256/free-discussion-6545246-5480279.png?f=webp",
        },
        {
          id: 3,
          name: "Curieux",
          img: "https://cdn-icons-png.flaticon.com/512/725/725039.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
* {
  color: white;
}
.container3 {
  margin-right: auto;
  margin-left: auto;
  padding-right: 350px;
  padding-left: 350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.centered {
  display: flex;
  justify-content: center;
  align-items: center; /* Ajustez la hauteur en fonction de vos besoins */
}

.img-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.titleee {
  margin-top: 100px;
}

.passion {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
}

.contenu {
  display: flex;
  justify-content: space-between;
  gap: 40px;
}

.card {
  margin-top: 11px;
  width: 19em;
  height: 26.8em;
  background: #171717;
  transition: 1s ease-in-out;
  -webkit-clip-path: polygon(
    30px 0%,
    100% 0,
    100% calc(100% - 30px),
    calc(100% - 30px) 100%,
    0 100%,
    0% 30px
  );
  clip-path: polygon(
    30px 0%,
    100% 0,
    100% calc(100% - 30px),
    calc(100% - 30px) 100%,
    0 100%,
    0% 30px
  );
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -2px -2px 3px -1px rgba(75, 71, 71, 0.7);
  border: 1px solid rgba(0, 0, 0, 0);
}

.card span {
  font-weight: bold;
  color: white;
  text-align: center;
  display: block;
  font-size: 1em;
}

.card .info {
  font-weight: 400;
  color: white;
  display: block;
  text-align: center;
  font-size: 0.85em;
  margin: 1em;
}

.card .img {
  width: 4.8em;
  height: 4.8em;
  background: white;
  border-radius: 15px;
  margin: auto;
}
img {
  border-radius: 15px;
}

.card button {
  padding: 0.8em 1.7em;
  display: block;
  margin: auto;
  border-radius: 25px;
  border: none;
  font-weight: bold;
  background: rgb(255, 255, 255) 94.3%;
  color: rgb(0, 0, 0);
  transition: 0.4s ease-in-out;
}

.main_card {
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 30px;
  overflow: hidden;
  margin: 10px;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -2px -2px 3px -1px rgba(75, 71, 71, 0.7);
  border: 1px solid rgba(0, 0, 0, 0);
}

.background {
  position: absolute;
  inset: 0;
  background: #171717;
}
/* ici */
.cool_card_logo {
  position: absolute;
  right: 50%;
  bottom: 50%;
  transform: translate(50%, 50%);
  font-size: 15px;
  font-weight: bold;
  color: #fff;
}

.icon {
  display: inline-block;
  width: 20px;
  height: 20px;
}

.icon {
  font-weight: bold;
}

.box {
  position: absolute;
  padding: 10px;
  text-align: right;
  background: rgba(255, 255, 255, 0.389);
  border-top: 2px solid rgb(255, 255, 255);
  border-right: 1px solid white;
  border-radius: 10% 13% 42% 0%/10% 12% 75% 0%;
  box-shadow: rgba(100, 100, 111, 0.364) -7px 7px 29px 0px;
}

@media screen and (max-width: 1366px) {
  .titleee {
    margin-top: 20px;
  }
  .main_card {
    position: relative;
    width: 77px;
    height: 90px;
    border-radius: 30px;
    overflow: hidden;
    margin: 10px;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -2px -2px 3px -1px rgba(75, 71, 71, 0.7);
    border: 1px solid rgba(0, 0, 0, 0);
  }
  P {
    padding-top: 7px;
    font-size: 13px;
  }

  .card {
    margin-top: 11px;
    width: 19em;
    height: 24.7em;
    background: #171717;
    transition: 1s ease-in-out;
    -webkit-clip-path: polygon(
      30px 0%,
      100% 0,
      100% calc(100% - 30px),
      calc(100% - 30px) 100%,
      0 100%,
      0% 30px
    );
    clip-path: polygon(
      30px 0%,
      100% 0,
      100% calc(100% - 30px),
      calc(100% - 30px) 100%,
      0 100%,
      0% 30px
    );
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    display: flex;
    flex-direction: column;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -2px -2px 3px -1px rgba(75, 71, 71, 0.7);
    border: 1px solid rgba(0, 0, 0, 0);
  }
}

@media screen and (max-width: 768px) {
  .container3 {
    padding: 0 10px;
  }

  .contenu {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 100%;
    max-width: 300px;
  }

  .titleee {
    margin-top: 50px;
  }
}

@media screen and (max-width: 820px) {
  .container3 {
    padding: 0 10px;
  }

  .contenu {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 100%;
    max-width: 300px;
  }

  .titleee {
    margin-top: 50px;
  }
}
@media screen and (max-width: 1024px) {
  .container3 {
    padding: 0 10px;
  }

  .contenu {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 100%;
    max-width: 300px;
  }

  .titleee {
    margin-top: 50px;
  }
}
</style>
