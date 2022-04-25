import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'
import HomePage from '../views/HomePage.vue'
import SignupPage from '../views/SignupPage.vue'
import RequestcertPage from '../views/RequestcertPage.vue'
import TrackcertPage from '../views/TrackcertPage.vue'
import EditProfile from '../views/EditProfile.vue'
import AdminHomePage from '../views/AdminHomePage.vue'
import AppointmentPage from '../views/AppointmentPage.vue'
import ResidentPage from '../views/ResidentPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/loginpage',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/homepage',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/signuppage',
    name: 'SignupPage',
    component: SignupPage
  },
  {
    path: '/requestcertpage',
    name: 'RequestcertPage',
    component: RequestcertPage
  },
  {
    path: '/trackcertpage',
    name: 'TrackcertPage',
    component: TrackcertPage
  },
  {
    path: '/editprofile',
    name: 'EditProfile',
    component: EditProfile
  },
  {
    path: '/adminhomepage',
    name: 'AdminHomePage',
    component: AdminHomePage
  },
  {
    path: '/appointmentpage',
    name: 'AppointmentPage',
    component: AppointmentPage
  },
  {
    path: '/resident',
    name: 'ResidentPage',
    component: ResidentPage
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
