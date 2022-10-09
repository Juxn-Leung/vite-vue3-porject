import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home/Home.vue'
import Mine from '@/views/Mine/Mine.vue'

const routes = [
  { 
    path: '/', 
    name: 'Home',
    component: Home 
  },
  { 
    path: '/mine', 
    name: 'Mine',
    component: Mine 
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

export default router