import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Header from './components/Header.vue';
import Signin from './components/Signin.vue';
import Signup from './components/Signup.vue';
import Search from './components/Search.vue';
import Sample from './components/Sample.vue';
import Alltax from './views/Alltax.vue';
import Form16 from './views/Form16.vue';
import Logout from './views/Logout.vue';
import Dashboard from './views/Dashboard.vue';
import AllEmploye from './views/AllEmploye.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sample',
      name: 'sample',
      component: Sample
    },
    {
      path: '/header',
      name: Header,
      component: Header
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/all',
      name: 'all',
      component: AllEmploye
    },
    {
      path: '/alltax',
      name: 'alltax',
      component: Alltax
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/form16',
      name: 'form16',
      component: Form16
    }
  ]
});
