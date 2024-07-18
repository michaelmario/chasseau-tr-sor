import { createRouter, createWebHistory } from 'vue-router'

// route guard
import { projectAuth } from '../firebase/config';

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (!user) {
    next({ name: 'LoginPage' })
  } else {
    next()
  }
}

 const routes = [
  {
    path: "/",
    name: "home",
    meta: { authorized: false },
    component: () => import("../views/homeView.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    meta: { authorized: false },
    component: () => import("../views/ContactView.vue"),
  },
  {
    path: "/productView/",
    name: "View-Product",
    meta: { authorized:false },
    component: () => import("../views/productView.vue"),
  },

  {
    path: "/productView/:id",
    name: "productView",
    meta: { authorized: false },
    component: () => import("../views/productViewId.vue"),
  },
  {
    path: '/LoginPage',
    name: 'LoginPage',
    component:()=> import("../views/auth/LoginPage") 
  },
  {
    path: '/signupPage',
    name: 'SignupPage',
    component:()=>import("../views/auth/SignupPage")
  },
  {
    path: '/gamePage',
    name: 'GamePage',   
    component:()=>import("../views/GamePage"),
    meta: { authorized:true },
    beforeEnter:requireAuth
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

 
export default router;
