<template>
  <div class="pic-ctn">
    <img
      v-for="(image, index) in images"
      :key="index"
      :src="image.src"
      :alt="image.alt"
      class="pic"
      :width="image.width"
    />
  </div>
</template>

<script>
export default {
  name: "CarouselImage",
  data() {
    return {
      images: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
          alt: "Html",
          width: "150px",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
          alt: "Css",
          width: "110px",
        },
        {
          src: "https://logos-marques.com/wp-content/uploads/2021/03/JavaScript-Logo.png",
          alt: "Js",
          width: "280px",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
          alt: "Vue",
          width: "170px",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
          alt: "Node",
          width: "150px",
        },
      ],
    };
  },
};
</script>
<style>
@keyframes display {
  0% {
    transform: translateX(200px);
    opacity: 0;
  }
  10% {
    transform: translateX(0);
    opacity: 1;
  }
  20% {
    transform: translateX(0);
    opacity: 1;
  }
  30% {
    transform: translateX(-200px);
    opacity: 0;
  }
  100% {
    transform: translateX(-200px);
    opacity: 0;
  }
}

.pic-ctn {
  position: relative;
  height: 300px;
  margin-top: 15vh;
}

.pic-ctn > img {
  position: absolute;
  top: 0;
  left: calc(50% - 100px);
  opacity: 0;
  animation: display 10s infinite;
}

img:nth-child(2) {
  animation-delay: 2s;
}
img:nth-child(3) {
  animation-delay: 4s;
}
img:nth-child(4) {
  animation-delay: 6s;
}
img:nth-child(5) {
  animation-delay: 8s;
}
@media screen and (max-width: 1366px) {
  .pic-ctn {
    margin-top: 6px;
  }
}
@media (max-width: 768px) {
  .pic-ctn {
    height: 200px;
    width: 50%;
  }
}
@media (max-width: 820px) {
  .pic-ctn {
    height: 200px;
    width: 50%;
    margin-top: 86px;
  }
}
</style>
