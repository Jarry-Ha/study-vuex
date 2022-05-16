import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VuexCounter from '../components/vuex/VuexCounter.vue'
import Employees from '../components/Employees.vue'
import UserList from '../components/UserList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/counter',
    name: 'VuexCounter',
    component: VuexCounter
  },
  {
    path: '/employees',
    name: 'Employees',
    component: Employees
  },
  {
    path: '/users',
    name: 'UserList',
    component: UserList
  },  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
