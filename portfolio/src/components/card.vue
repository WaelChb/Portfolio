<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <p class="title">@WaelChb</p>
      </div>
      <div class="flip-card-back">
        <p class="title">Développeur</p>
        <br />
        <p>
          Je suis un développeur passionné, constamment avide de nouvelles
          connaissances et de défis.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlipCard",
};
</script>

<style>
.flip-card {
  background-color: transparent;
  width: 190px;
  height: 254px;
  perspective: 1000px;
  font-family: sans-serif;
}

.title {
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  margin: 0;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid #e3d5ca;
  border-radius: 1rem;
}

.flip-card-front {
  background: linear-gradient(
    120deg,
    rgb(92, 85, 83) 30%,
    rgb(139, 110, 99) 88%,
    rgb(214, 193, 168) 40%,
    rgb(77, 64, 60) 78%
  );
  color: #ffffff;
}

.flip-card-back {
  background: linear-gradient(
    120deg,
    rgb(92, 85, 83) 30%,
    rgb(139, 110, 99) 88%,
    bisque 40%,
    rgb(77, 64, 60) 78%
  );
  color: white;
  transform: rotateY(180deg);
}


@media screen and (max-width: 1366px) { 
  .flip-card {
  background-color: transparent;
  width: 190px;
  height: 240px;
  perspective: 1000px;
  font-family: sans-serif;
}
  
 }
</style>
