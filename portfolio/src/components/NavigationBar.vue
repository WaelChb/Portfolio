<template>
  <nav class="navbar">
    <a href="#" class="logo">Portfolio <LoadImage></LoadImage></a>

    <div class="nav-links">
      <ul>
        <li>
          <a href="#accueil" @click="setActiveTab('accueil')">Accueil</a>
        </li>
        <li>
          <a href="#a-propos" @click="setActiveTab('a-propos')">À Propos</a>
        </li>
        <li>
          <a href="#projet" @click="setActiveTab('projets')">Projets</a>
        </li>
        <li>
          <a href="#competence" @click="setActiveTab('competences')"
            >Compétences</a
          >
        </li>
        <li>
          <a href="#contact" @click="setActiveTab('contact')">Contact</a>
        </li>
      </ul>
    </div>
    <img src="../assets/menu-btn.png" class="menu-hamburger" />
  </nav>
</template>

<script>
import LoadImage from "./load.vue";
export default {
  name: "NavigationBar",
  components: {
    LoadImage,
  },

  data() {
    return {
      activeTab: "accueil",
    };
  },
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

  mounted() {
    const menuHamburger = this.$el.querySelector(".menu-hamburger");
    const navLinks = this.$el.querySelector(".nav-links");

    menuHamburger.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-menu");
    });
  },
};
</script>

<style>
.navbar {
  padding: 50px;
  display: flex;
  justify-content: space-between;
  /* position: absolute; */
  align-items: center;
}
.navbar a {
  color: white;
  transition: color 0.3s ease;
}
.navbar a:hover {
  color: #fdd995;
}

nav .logo {
  font-size: 3em;
  height: 100px;
  width: auto;
  margin-right: 10px;
  border-radius: 5px;
}

.navbar .nav-links ul {
  display: flex;
}
.navbar .nav-links ul li {
  margin: 0 25px;
}

.navbar .nav-links ul li.active a {
  color: #fdd995;
  font-weight: 600;
}
.navbar .menu-hamburger {
  display: none;
  position: absolute;
  top: 50px;
  right: 50px;
  width: 40px;
}
@keyframes slide {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}

@media screen and (max-width: 972px) {
  .navbar {
    padding: 0;
    z-index: 4000;
  }
  nav .logo img {
    position: absolute;
    top: 50px;
    left: 50px;
    z-index: 4000;
  }
  .navbar .menu-hamburger {
    display: block;
    margin-top: 60px;
    margin-right: 20px;
    z-index: 4000;
  }
  .nav-links {
    top: 0;
    left: 0;
    position: absolute;
    background-color: rgb(255, 255, 255, 0.2);
    backdrop-filter: blur(7px);
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -100%;
    transition: all 0.5s ease;
    z-index: 4000;
  }
  .nav-links.mobile-menu {
    margin-left: 0;
  }

  .navbar .nav-links ul li {
    margin: 25px 0;
  }
  .nav-links ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
