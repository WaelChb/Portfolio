<template>
  <div class="card2">
    <div class="content">
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 9V5H4V9H20ZM20 11H4V19H20V11ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM5 12H8V17H5V12ZM5 6H7V8H5V6ZM9 6H11V8H9V6Z"
        ></path>
      </svg>
      <p class="para">
        Passionné de programmation depuis mon adolescence, <br />
        j'ai débuté en créant un serveur Garry's Mod. <br />
        Cette expérience a éveillé ma curiosité et ma détermination, et depuis,
        mon intérêt pour le développement
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DescriptionAPropos",
};
</script>

<style>
.card2 {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  border-radius: 24px;
  line-height: 1.6;
}

.content {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  border-radius: 22px;
  color: #ffffff;
  overflow: hidden;
  background: #171717;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -2px -2px 3px -1px rgba(75, 71, 71, 0.7);
  border: 1px solid rgba(0, 0, 0, 0);
}

.content svg {
  width: 48px;
  height: 48px;
}

.content .para {
  z-index: 1;
  opacity: 1;
  font-size: 16px;
}

.content .link {
  z-index: 1;
  color: #fea000;
  text-decoration: none;
  font-family: inherit;
  font-size: 16px;
}
</style>
