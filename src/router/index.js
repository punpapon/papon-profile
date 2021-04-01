import Vue from 'vue'
import Router from 'vue-router'
// import home from '@/views/app/home'

import home from '@/views/app/homepage'
import profile from '@/views/app/profile'
// import services from '@/components/services'
// import contact from '@/components/contact'
// import details from '@/components/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    }
    // {
    //   path: '/services',
    //   name: 'services',
    //   component: services
    // },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: contact
    // },
    // {
    //   path: '/details/:Pid',
    //   name: 'details',
    //   component: details
    // }
  ]
})
