import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "demo" */ './views/Dashboard.vue')
    },
    {
      path: '/dashboard2',
      name: 'dashboard2',
      component: () => import(/* webpackChunkName: "demo" */ './views/Dashboard2.vue')
    },
    {
      path: '/',
      redirect: 'register',
      component: DashboardLayout,
      children: [

        {
          path: '/test-dashboard',
          name: 'Test Dashboard',
          component: () => import(/* webpackChunkName: "demo" */ './views/TestDashboard.vue')
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
