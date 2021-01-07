import Vue from 'vue'
import VueRouter from 'vue-router'
import Clock from '../views/AlarmClock.vue'
import Questions from '../views/Questions.vue'
import Results from '../views/Results.vue'
import Tips from '../views/Tips.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Results',
    component: Results
  },
  {
    path: '/clock',
    name: 'Clock',
    component: Clock
  },
  {
    path: '/questions',
    name: 'Questions',
    component: Questions
  },
  {
    path: '/tips',
    name: 'Tips',
    component: Tips
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
