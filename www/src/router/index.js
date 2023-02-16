import { createRouter, createWebHistory } from 'vue-router';

import AddAttorney from '../components/AddAttorney.vue';
import AllAttorney from '../components/AllAttorney.vue';
import EditAttorney from '../components/EditAttorney.vue';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/add',
    name: 'add-attorney',
    component: AddAttorney,
  },
  {
    path: '/all',
    name: 'attroney-list',
    component: AllAttorney,
  },
  {
    path: '/edit',
    name: 'edit-attorney',
    component: EditAttorney,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
