<template>
  <footer class="footer">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <ul class="menu">
      <li class="menu__item">
        <a class="menu__link" href="#accueil" @click="setActiveTab('accueil')"
          >Accueil</a
        >
      </li>
      <li class="menu__item">
        <a class="menu__link" href="#a-propos" @click="setActiveTab('a-propos')"
          >À propos</a
        >
      </li>
      <li class="menu__item">
        <a class="menu__link" href="#projet" @click="setActiveTab('projets')"
          >Projets</a
        >
      </li>
      <li class="menu__item">
        <a
          class="menu__link"
          href="#competence"
          @click="setActiveTab('competences')"
          >Compétences</a
        >
      </li>
      <li class="menu__item">
        <a class="menu__link" href="#contact" @click="setActiveTab('contact')"
          >Contact</a
        >
      </li>
    </ul>
    <p>&copy;WaelChurbaji.com | All Rights Reserved</p>
    <ul class="social-icon">
      <li class="social-icon__item">
        <a class="social-icon__link" href="#">
          <ion-icon name="logo-facebook"></ion-icon>
        </a>
      </li>
      <li class="social-icon__item">
        <a class="social-icon__link" href="#">
          <ion-icon name="logo-twitter"></ion-icon>
        </a>
      </li>
      <li class="social-icon__item">
        <a class="social-icon__link" href="#">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "FooterVue",
  methods: {
    setActiveTab(tabName) {
      this.activeTab = tabName;
      const targetElement = document.getElementById(tabName);
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        window.scrollTo({
          top: rect.top + window.scrollY,
          behavior: "smooth",
        });
      }
    },
  },
};
</script>
<style>
.footer {
  margin-top: 110px;
  position: relative;
  width: 94%;
  background: #ff6900;
  min-height: 10px;
  padding: 0px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.social-icon,
.menu {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  flex-wrap: wrap;
}

.social-icon__item,
.menu__item {
  list-style: none;
}

.social-icon__link {
  font-size: 2rem;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
}
.social-icon__link:hover {
  transform: translateY(-10px);
}

.menu__link {
  font-size: 1.2rem;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
  text-decoration: none;
  opacity: 0.75;
  font-weight: 300;
}

.menu__link:hover {
  opacity: 1;
}

.footer p {
  color: #fff;
  margin: 15px 0 10px 0;
  font-size: 1rem;
  font-weight: 300;
}

.wave {
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  height: 100px;
  background: url("../assets/wave.png");
  background-size: 1000px 100px;
}

.wave#wave1 {
  z-index: 1000;
  opacity: 1;
  bottom: 0;
  animation: animateWaves 4s linear infinite;
}

.wave#wave2 {
  z-index: 999;
  opacity: 0.5;
  bottom: 10px;
  animation: animate 4s linear infinite !important;
}

.wave#wave3 {
  z-index: 1000;
  opacity: 0.2;
  bottom: 15px;
  animation: animateWaves 3s linear infinite;
}

.wave#wave4 {
  z-index: 999;
  opacity: 0.7;
  bottom: 20px;
  animation: animate 3s linear infinite;
}

@keyframes animateWaves {
  0% {
    background-position-x: 1000px;
  }
  100% {
    background-positon-x: 0px;
  }
}

@keyframes animate {
  0% {
    background-position-x: -1000px;
  }
  100% {
    background-positon-x: 0px;
  }
}
@media screen and (max-width: 1366px) {
  .footer {
    margin-top: 40px;
    width: 92%;
    min-height: 0px;
  }
}
@media screen and (max-width: 768px) {
  .footer {
    display: none;
  }
  .menu__link {
    font-size: 1rem;
    margin: 5px;
  }
  .social-icon__link {
    font-size: 1.5rem;
    margin: 5px;
  }
}
@media screen and (max-width: 820px) {
  .footer {
    display: none;
  }
  .menu__link {
    font-size: 1rem;
    margin: 5px;
  }
  .social-icon__link {
    font-size: 1.5rem;
    margin: 5px;
  }
}
</style>
