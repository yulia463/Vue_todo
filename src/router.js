import Vue from 'vue'
import Router from 'vue-router'
import Preview from "@/views/Preview.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/preview',
      component: Preview
    },
    {
      path: '/',
      component: () => import('./views/Form.vue')
    }
  ]
})