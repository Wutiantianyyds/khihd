import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[
      {
        path: '/userList',
        name: 'userList',
        component: () => import('../views/UserList.vue')
      },
      {
        path: '/manage',
        name: 'manage',
        component: () => import('../views/Manage.vue')
      },
      {
        path: '/shopList',
        name: 'shopList',
        component: () => import('../views/ShopList.vue')
      },
      {
        path: '/foodList',
        name: 'foodList',
        component: () => import('../views/FoodList.vue')
      },
      {
        path: '/orderList',
        name: 'orderList',
        component: () => import('../views/OrderList.vue')
      },{
        path: '/adminList',
        name: 'adminList',
        component: () => import('../views/AdminList.vue')
      },{
        path: '/visitor',
        name: 'visitor',
        component: () => import('../views/Visitor.vue')
      },{
        path: '/vueEdit',
        name: 'vueEdit',
        component: () => import('../views/VueEdit.vue')
      },{
        path: '/explain',
        name: 'explain',
        component: () => import('../views/Explain.vue')
      },{
        path: '/adminSet',
        name: 'adminSet',
        component: () => import('../views/AdminSet.vue')
      },{
        path: '/addShop',
        name: 'addShop',
        component: () => import('../views/AddShop.vue')
      },{
        path: '/addGoods',
        name: 'addGoods',
        component: () => import('../views/AddGoods.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
