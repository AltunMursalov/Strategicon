import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Home from '@/components/pages/Home'

// Global components
import Header from '@/components/Header'

// Register components
Vue.component('app-header', Header)

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'Home',
      path: '/',
      components: {
        default: Home,
        header: Header
      }
    }
  ]
})
