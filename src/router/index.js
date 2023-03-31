import { createRouter, createWebHistory } from 'vue-router'
import RouterReplaceComp from "../utils/routerReplaceSelf.js";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      // component: Home
      component:() => RouterReplaceComp(() => import('../views/Home.vue')),
      // component:() => RouterReplaceComp(() => import('../views/video/Video.vue')),
      meta:{},
    },
    {
      path: '/home',
      name: 'home',
      // component: Home
      component:() => RouterReplaceComp(() => import('../views/Home.vue')),
      // component:() => RouterReplaceComp(() => import('../views/video/Video.vue')),
      meta:{},
    },
    {
      path:'/login',
      name:'Login',
      component:() => RouterReplaceComp(() => import('../views/Login.vue'))
    },
    {
      path:'/register',
      name:'Register',
      component:() => RouterReplaceComp(() => import('../views/Register.vue'))
    },
    {
      path: '/test',
      name: 'test',
      component: () => RouterReplaceComp(() => import('../views/test.vue'))
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => RouterReplaceComp(() => import('../views/Setting.vue'))
    },
  ]
})