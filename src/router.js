import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "demo" */ './views/Home.vue')
  },
  {
    path: '/',
    // redirect: 'register',
    component: DashboardLayout,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ './views/Dashboard.vue')
      },
      {
        path: '/icons',
        name: 'icons',
        component: () => import(/* webpackChunkName: "demo" */ './views/Icons.vue')
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import(/* webpackChunkName: "demo" */ './views/profile.vue')
      },
      {
        path: '/test-bed-list',
        name: 'Test Bed List',
        component: () => import(/* webpackChunkName: "demo" */ './views/TestBedList.vue')
      },
      {
        path: '/booking',
        name: 'Booking',
        component: () => import(/* webpackChunkName: "demo" */ './views/Booking.vue')
      },
      {
        path: '/carts',
        name: 'Carts',
        component: () => import(/* webpackChunkName: "demo" */ './views/Carts.vue')
      },
      {
        path: '/orders',
        name: 'Orders',
        component: () => import(/* webpackChunkName: "demo" */ './views/Orders.vue')
      },
      {
        path: '/upload',
        name: 'Upload',
        component: () => import(/* webpackChunkName: "demo" */ './views/Upload.vue')
      },
      {
        path: '/admin-add-test-bed',
        name: 'Admin Add Test Bed',
        component: () => import(/* webpackChunkName: "demo" */ './views/AdminAddTestBed.vue')
      },

    ]
  },
  {
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "demo" */ './views/Login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "demo" */ './views/Register.vue')
      }
    ]
  }
  ]
})
