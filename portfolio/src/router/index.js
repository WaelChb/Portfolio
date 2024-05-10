import { createRouter, createWebHistory } from "vue-router";
import PageAccueil from "../components/PageAccueil.vue";
import APropos from "../components/APropos.vue";

const routes = [
  { path: "/", component: PageAccueil },
  { path: "/a-propos", component: APropos },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
