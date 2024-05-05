<template>
    <div class="container2">
        <h4>Bienvenue sur mon portfolio</h4>
        <h2>Wael Churbaji</h2>
        <h4>Concépteur développeur</h4>
        <div class="bouton">
            <button class="button">
            <span class="button-content">Télécharger mon cv </span>
            </button>

            <button class="button">
            <span class="button-content">À Propos de moi</span>
            </button>
        </div>
          <div class="social">
            <a href="https://github.com/WaelChb">
                <button class="btn">
                  <svg width="40" height="40" fill="#0092E4" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github">
                    <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                  </svg>
                </button>
            </a>
            <a href="https://www.linkedin.com/in/wael-churbaji-ba7b341b7/">
                <button class="btn">
                  <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 448 512" fill="#fff"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>    
                </button>
            </a>
          </div>
          <div class="flipcard">
            <FlipCard/>
            
          </div> 

    </div>
</template>

<script>
import FlipCard from './card.vue'; 
export default{
  name: 'AccueilContenu',
  components: {
    FlipCard
  }

}
</script>

<style>
.container2 {
    margin-right: auto;
    margin-top: 30px;
    margin-left: auto;
    padding-right: 350px;
    padding-left: 350px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
h4, h2{
    text-align: center; 
    color: #fff;
}

.button {
  margin: 30px;
    margin-right: 20px; 
}
.button:last-child {
    margin-right: 0;
}

.button {
  position: relative;
  overflow: hidden;
  height: 3rem;
  padding: 0 2rem;
  border-radius: 1.5rem;
  background: #3d3a4e;
  background-size: 400%;
  color: #fff;
  border: none;
  cursor: pointer;
}

.button:hover::before {
  transform: scaleX(1);
}

.button-content {
  position: relative;
  z-index: 1;
}

.button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  transform: scaleX(0);
  transform-origin: 0 50%;
  width: 100%;
  height: inherit;
  border-radius: inherit;
  background: linear-gradient(
    82.3deg,
    rgba(150, 93, 233, 1) 10.8%,
    rgba(99, 88, 238, 1) 94.3%
  );
  transition: all 0.475s;
}
.social{
  margin-left: -800px;
  margin-top: -50px;
}

.flipcard{
  margin-top: -230px;
}

.btn {
  display: grid;
  place-items: center;
  background: #191D24;
  margin-top: 100px;
  padding: 0.5em;
  border-radius: 10px;
  box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
              -2px -2px 3px -1px rgba(255,255,255,0.7);
  border: 1px solid rgba(0,0,0,0);
  cursor: pointer;
  transition: transform 0.5s;
}

.btn:hover {

  border: 1px solid rgba(0,0,0,0.1);
  transform: translateY(0.5em);
}

.btn svg {
  transition: transform 0.5s;
  fill : #fff;
}

.btn:hover svg {
  transform: scale(0.9);
  fill: #f4e7fb;
}





</style>