import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';

const routers = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routers,
});

export default router;
