import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Home from '@/components/pages/Home';

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'Home',
      component: Home,
      path: '/'
    }
  ]
})
