<template>

    <nav class="navbar">
    <a href="#" class="logo">Portfolio</a>
    <div class="nav-links">
      <ul>
        <li :class="{ active: activeTab === 'accueil' }"><a href="#" @click="setActiveTab('accueil')">Accueil</a></li>
      <li :class="{ active: activeTab === 'projets' }"><router-link to="/projets" @click="setActiveTab('projets')">Projets</router-link></li>
      <li :class="{ active: activeTab === 'competences' }"><a href="#" @click="setActiveTab('competences')">Compétences</a></li>
      <li :class="{ active: activeTab === 'a-propos' }"><a href="#" @click="setActiveTab('a-propos')">À Propos</a></li>
      <li :class="{ active: activeTab === 'contact' }"><a href="#" @click="setActiveTab('contact')">Contact</a></li>
      </ul>
    </div>
    <img src="../assets/menu-btn.png" class="menu-hamburger">
  </nav>

</template>

<script>

export default{
  name: 'NavigationBar',

  data() {
    return {
      activeTab: 'accueil' // Par défaut, l'onglet Accueil est actif
    };
  },
  methods: {
    setActiveTab(tabName) {
      this.activeTab = tabName;
    }
  },

    mounted() {
    const menuHamburger = document.querySelector(".menu-hamburger")
        const navLinks = document.querySelector(".nav-links")
 
        menuHamburger.addEventListener('click',()=>{
        navLinks.classList.toggle('mobile-menu')
        })
  }

}

</script>

<style>
.navbar{
  padding: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;  
}
.navbar a {
  color: white;
}

nav .logo {
  font-size: 3em;
  height: 100px;
    width: auto;
    margin-right: 10px;
    border-radius: 5px;
}

.navbar .nav-links ul{
  display: flex;
}
.navbar .nav-links ul li{
  margin: 0 25px;
}

.navbar .nav-links ul li.active a{
  color: #FDD995;
  font-weight: 600;
}
.navbar .menu-hamburger{
  display: none;
  position: absolute;
  top: 50px;
  right: 50px;
  width: 40px;
}



@media screen and (max-width: 900px){
  .navbar{
    padding: 0;
  }
  nav .logo img {
    position: absolute;
  top: 50px;
  left: 50px; 
}
  .navbar .menu-hamburger{
    display: block;
   margin-top: 60px;
   margin-right: 20px;
  }
  .nav-links{
    top: 0;
    left: 0;
    position: absolute;
    background-color: rgb(255, 255, 255, 0.200);
    backdrop-filter: 7px;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -100%;
    transition: all 0.5s ease;
    
  }
  .nav-links.mobile-menu{
  margin-left: 0;
}

  .navbar .nav-links ul li{
  margin: 25px 0;
}
  .nav-links ul{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

</style>