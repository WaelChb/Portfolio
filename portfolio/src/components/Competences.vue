<template>
  <div class="container6">
    <div class="titre2">
      <h3>Mes Compétences</h3>
    </div>
    <br />
    <br />
    <section>
      <div class="contenu4">
        <div
          class="cardSkills"
          v-for="(skills, category) in skillCategories"
          :key="category"
        >
          <span class="titleSkills">{{ category }}</span>
          <div class="card__tags">
            <ul class="tag">
              <li class="tag__name" v-for="skill in skills" :key="skill">
                {{ skill }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <CarouselImage />
  </div>
</template>

<script>
import CarouselImage from "./CarouselImage.vue";
export default {
  name: "CompetencesVue",
  components: {
    CarouselImage,
  },
  data() {
    return {
      skillCategories: {
        "Front-End": [
          "Html",
          "Css",
          "VueJs",
          "ReactJS",
          "JavaScript",
          "Wordpress",
        ],
        "Back-End": [
          "Nodejs",
          "ExpressJs",
          ".Net C#",
          "Mysql",
          "Php",
          "Entity Framework",
        ],
      },
    };
  },
};
</script>

<style>
.container6 {
  margin-right: auto;
  margin-left: auto;
  padding-right: 550px;
  padding-left: 550px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titre2 {
  margin-top: 100px;
}

.contenu4 {
  display: flex;
  justify-content: space-between;
  gap: 0px;
}

.cardSkills {
  width: 34%;
  height: 300px;
  background: #171717;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  color: #31572c;
  border-radius: 15px;
}

.card__tags {
  overflow: auto;
  height: 80%;
}

.titleSkills {
  font-weight: 900;
  font-size: 1.7em;
}

.tag__name {
  display: inline-block;
  color: #fff;
  font-size: 1.1em;
  background-color: black;
  padding: 6px 23px 9px;
  border-radius: 70em;
  margin: 8px 6px 8px 0;
  margin-left: 0px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.tag__name::before,
.tag__name::after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 40%;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: red;
}

.tag__name::before {
  left: 7px;
}

.tag__name::after {
  right: 7px;
}

.tag__name:hover {
  transform: scale(1.1);
  background-color: rgba(249, 154, 84);
}
@media screen and (max-width: 768px) {
  .cardSkills {
    width: calc(50% - 20px);
  }
  .container6 {
    padding: 0 10px;
  }
}

@media screen and (max-width: 576px) {
  .container6 {
    padding: 0 10px;
  }
  .cardSkills {
    width: 100%;
  }
}
</style>
