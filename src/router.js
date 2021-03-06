import Vue from 'vue'
import VueRouter from 'vue-router'
import ChatView from './components/ChatView.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'ChatView',
  component: ChatView
}]

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router