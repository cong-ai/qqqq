import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
// 作业3：解开此处代码
// import "bootstrap/dist/css/bootstrap.css"
// import "./assets/fonts/iconfont.css"
import VueRouter from 'vue-router'
import Vuex from 'vuex'


axios.defaults.baseURL = "https://www.escook.cn";
Vue.prototype.$axios = axios

Vue.use(Vuex)
Vue.use(VueRouter)
const routes = [
  // 作业1: 解开此处代码
  // {
  //   path: '/',
  //   redirect: '/index'
  // },
  // {
  //   path: '/index',
  //   component: () => import('@/views/Index')
  // },
  // {
  //   path: '/sort',
  //   component: () => import('@/views/Sort')
  // },
  // {
  //   path: '/order',
  //   component: () => import('@/views/Order')
  // },
  // {
  //   path: '/my',
  //   component: () => import('@/views/My')
  // },

  // 作业2：解开此处代码
  // {
  //   path: '/',
  //   redirect: '/homepage'
  // },
  // {
  //   path: '/homepage',
  //   component: () => import('@/views/HomePage')
  // },
  // {
  //   path: '/news',
  //   component: () => import('@/views/News')
  // },
  // {
  //   path: '/sport',
  //   component: () => import('@/views/Sport'),
  //   children: [
  //     {
  //       path: "sportpage",
  //       component: () => import('@/views/Second/SportPage')
  //     },
  //     {
  //       path: "domestic",
  //       component: () => import('@/views/Second/Domestic')
  //     },
  //     {
  //       path: "abroad",
  //       component: () => import('@/views/Second/Abroad')
  //     },
  //   ]
  // },

  // 作业3：解开此处代码
  // {
  //   path: '/mygoodslist',
  //   component:()=>import('@/views/MyGoodsList')
  // },
  // {
  //   path: '/mygoodssearch',
  //   component:()=>import('@/views/MyGoodsSearch')
  // },
  // {
  //   path: '/myuserinfo',
  //   component:()=>import('@/views/MyUserInfo')
  // },


  // {
  //   path: '*',
  //   component: () => import('@/views/NotFound')
  // }
]
const router = new VueRouter({
  routes
})

const store = new Vuex.Store({
  state: {
    goodList: [
      {
        name: "诸葛亮",
        price: 1000,
        num: 1,
        checked: false,
      },
      {
        name: "蔡文姬",
        price: 1500,
        num: 1,
        checked: false,
      },
      {
        name: "妲己",
        price: 2000,
        num: 1,
        checked: false,
      },
      {
        name: "鲁班",
        price: 2200,
        num: 1,
        checked: false,
      },
    ],
  },
})
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
