import { createRouter, createWebHistory } from 'vue-router'
import PageAccueil from '../components/PageAccueil.vue'
import ListeProjets from '../components/ListeProjets.vue'
import ListeCompetences from '../components/ListeCompetences.vue'
import APropos from '../components/APropos.vue'
import FormulaireContact from '../components/FormulaireContact.vue'

const routes = [
  { path: '/', component: PageAccueil },
  { path: '/projets', component: ListeProjets },
  { path: '/competences', component: ListeCompetences },
  { path: '/a-propos', component: APropos },
  { path: '/contact', component: FormulaireContact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
