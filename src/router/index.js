import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ItemPage from '../views/ItemPage'
import MainLayout from '../views/MainLayout'
import Basket from '../views/Basket'

import NotFound from '../views/NotFound'
const routes = [
  {
    path:'/',
    component: MainLayout,
    children:[
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path:':id',
        name: 'ItemPage',
        component: ItemPage
      },
      {
        path:'basket',
        name: 'basket',
        component: Basket
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
