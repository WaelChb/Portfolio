<template>
  <div class="container4">
    <div class="title2">
      <h3>Mes projets</h3>
      <br />
      <br />
    </div>
    <div class="contenu">
      <div class="card" v-for="(card, index) in cards" :key="index">
        <div class="card-image"></div>
        <p class="card-title">{{ card.title }}</p>
        <p class="card-body">{{ card.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjetListe",
  data() {
    return {
      cards: [
        {
          title: "Card ",
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title2 {
  margin-top: 100px;
}

h3 {
  font-size: 30px;
}

.contenu {
  display: flex;
  justify-content: space-between;
  gap: 40px;
}

.card {
  padding: 5px;
  width: 200px;
  border-radius: 20px;
  background: #212121;
  box-shadow: 5px 5px 8px #1b1b1b, -5px -5px 8px #272727;
  transition: 0.4s;
}

.card:hover {
  translate: 0 -10px;
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  margin: 15px 0 0 10px;
}

.card-image {
  min-height: 140px;
  background-color: #313131;
  border-radius: 15px;
  background: #313131;
  box-shadow: inset 5px 5px 3px #2f2f2f, inset -5px -5px 3px #333333;
}

.card-body {
  margin: 13px 0 0 10px;
  color: rgb(184, 184, 184);
  font-size: 15px;
}
</style>
