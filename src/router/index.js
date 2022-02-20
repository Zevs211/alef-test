import { createRouter, createWebHistory } from 'vue-router'
import Form from '../views/Form.vue'
import Prev from '../views/Prev.vue'

const routes = [
  {
    path: '/',
    name: 'Form',
    component: Form
  },
  {
    path: '/prev',
    name: 'Prev',
    component: Prev
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
