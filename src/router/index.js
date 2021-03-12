import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blogs from '../views/Blogs.vue'
import Blog from '../views/Blog.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home Page',
    component: Home
  },
  {
    path: '/blogs',
    name: 'Blogs Page',
    component: Blogs
  },
  {
    // dynamic route
    path: '/blog/:number',
    name: 'Blog Page',
    component: Blog
  },
  {
    path: '/about',
    name: 'About Page',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
