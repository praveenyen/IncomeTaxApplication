<template>
  <div id="app" class="flyout">
    <mdb-navbar dark position="top" class="default-color young-passion-gradient" scrolling :scrollingOffset="20">
      <mdb-navbar-brand to="/" waves style="font-weight: bolder;">
        Income Tax
      </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav right v-if="$store.getters.logged" class="font-weight-bold">
          <mdb-nav-item exact to="/" waves-fixed>Home</mdb-nav-item>
          <mdb-nav-item to="/search" waves-fixed>Search</mdb-nav-item>
          <mdb-nav-item to="/alltax" waves-fixed>All Tax</mdb-nav-item>
          <mdb-nav-item to="/all" waves-fixed>All Employe</mdb-nav-item>
          <mdb-nav-item to="/form16" waves-fixed>Form16</mdb-nav-item>
          <mdb-nav-item to="/dashboard" waves-fixed>Dashboard</mdb-nav-item>
          <mdb-nav-item to="/logout" waves-fixed>Logout</mdb-nav-item>
        </mdb-navbar-nav>
        <mdb-navbar-nav v-if="!$store.getters.logged" right class="font-weight-bold">
          <mdb-nav-item to="/signin" waves-fixed>Signin</mdb-nav-item>
          <mdb-nav-item to="/signup" waves-fixed>Signup</mdb-nav-item>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <main :style="{marginTop: '60px'}">
      <router-view></router-view>
    </main>
    <mdb-footer color="default-color">
      <p class="footer-copyright mb-0 py-3 text-center">
        &copy; {{new Date().getFullYear()}} Copyright: <strong>RGUKT RKV</strong>
      </p>
    </mdb-footer>
  </div>
</template>

<script>
import VueCookie from 'vue-cookies';
import { mdbIcon, mdbBtn, mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbNavbarBrand, mdbFooter, mdbCard, mdbCardBody } from 'mdbvue'
import axios from 'axios'
export default {
  name: 'app',
  components: {
    mdbIcon,
    mdbCard,
    mdbBtn,
    mdbCardBody,
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbNavbarBrand,
    mdbFooter
  },
  data() {
    return {
      date: '',
    }
  },
  mounted() {
    this.$store.state.logged  = this.$cookies.isKey('user_session')
  },
  computed: {
  },
  methods: {
    logout() {
      console.log("You have been logged out from our system!");
    }
  },
};

</script>

<style>
.flyout {
  display: flex;
  flex-direction: column;
	min-height: 100vh;
	justify-content: space-between;
}
.active{
  background-color: rgba(255, 255, 255, 0.1);
}
.demo-section {
  padding: 20px 0;
} 
.demo-section > section {
  border: 1px solid #e0e0e0;
  padding: 15px;
}
.demo-section > h4 {
  font-weight: bold;
  margin-bottom: 20px;
}
.demo-title {
  color: #9e9e9e;
  font-weight: 700;
  margin-bottom: 0;
  padding-left: 15px;
}
</style>
