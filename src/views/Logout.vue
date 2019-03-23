<template>
    <mdb-container>
            <p>if you really want to log out</p>
            <mdb-btn  @click="logout()" color="danger">Logout</mdb-btn>
    </mdb-container>
</template>

<script>
import { mdbContainer, mdbIcon, mdbBtn, mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbNavbarBrand, mdbFooter, mdbCard, mdbCardBody } from 'mdbvue'
import VueCookies from 'vue-cookies';
export default {
    components: {
        mdbContainer,
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
  methods: {
      logout() {
          console.log("You have been successfully loggged out!");
          this.$cookies.remove('user_session');
          this.$store.state.logged  = false;
          this.$router.push('/');
      }
  },
}
</script>

<style>

</style>
