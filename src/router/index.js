import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [

  /* {
    path: '/teacher',   // 讲师
    name: 'teacher',
    component: () => import( '../views/teacher.vue')
  } */
  {
    path: '/',   // 讲师
    name: 'home',
    component: () => import( '@/views/home')
  } 

]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
