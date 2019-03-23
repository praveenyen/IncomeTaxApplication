<template>
    <mdb-container>
        <section class="form-elegant">
  <mdb-row>
    <mdb-col md="5">
      <mdb-card>
        <mdb-card-body class="mx-4">
          <div class="text-center">
            <h3 class="dark-grey-text mb-5"><strong>Sign in</strong></h3>
          </div>
          <mdb-input label="Your email" type="email" v-model="$store.state.email"/>
          <mdb-input label="Your password" type="password" containerClass="mb-0" v-model="$store.state.password"/>
          <p class="font-small blue-text d-flex justify-content-end pb-3">Forgot <a href="#" class="blue-text ml-1"> Password?</a></p>
          <div class="text-center mb-3">
            <mdb-btn @click="signin()" type="button" gradient="blue" rounded class="btn-block z-depth-1a">Sign in</mdb-btn>
          </div>
          <p class="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or Sign in with:</p>
          <div class="row my-3 d-flex justify-content-center">
            <mdb-btn type="button" color="white" rounded class="mr-md-3 z-depth-1a"><mdb-icon fab icon="facebook" class="blue-text text-center"/></mdb-btn>
            <mdb-btn type="button" color="white" rounded class="mr-md-3 z-depth-1a"><mdb-icon fab icon="twitter" class="blue-text"/></mdb-btn>
            <mdb-btn type="button" color="white" rounded class="z-depth-1a"><mdb-icon fab icon="google-plus" class="blue-text"/></mdb-btn>
          </div>
        </mdb-card-body>
        <mdb-modal-footer class="mx-5 pt-3 mb-1">
          <p class="font-small grey-text d-flex justify-content-end">Not a member? <a href="#" class="blue-text ml-1"> Sign Up</a></p>
        </mdb-modal-footer>
      </mdb-card>
    </mdb-col>
  </mdb-row>
</section>
    </mdb-container>
</template>

<script>
import { mdbModalFooter, mdbModal, mdbCard, mdbInput, mdbContainer, mdbCol, mdbRow, mdbIcon, mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbBtn, mdbEdgeHeader, mdbCardBody, mdbFormInline } from 'mdbvue';
import VueCookies from  'vue-cookies';
import axios from 'axios';
export default {
  name: 'Index',
  data() {
    return {
      users: [],
      email: '',
      password: '',
      url: 'http://localhost:8000/api/user/?format=json&username='+this.$store.state.email
    }
  },
  mounted() {
      if (this.$cookies.get('user_session')) {
        this.$router.push('/about')
      }
      this.$store.state.cookie = this.$cookies.get('user_session'),
    axios.request({
            method: 'get',
            baseURL: this.$store.state.url + this.$store.state.email,
            headers: {
                'Authorization': 'Token 9335ac8899b3e3664ba6b66eb2ac9aebecb8f735',
            }
        }).then(response => {
      this.users = response.data
      this.$store.state.users = response.data
    })
  },
  components: {
    mdbModalFooter,
    mdbModal,
    mdbCard,
    mdbInput,
    mdbContainer,
    mdbCol,
    mdbRow,
    mdbIcon,
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbBtn,
    mdbFormInline,
    mdbEdgeHeader,
    mdbCardBody
  },
  methods: {
    signin() {
      this.$store.email = this.email
      axios.request({
            method: 'get',
            baseURL: this.$store.state.url + this.$store.state.email,
            headers: {
                'Authorization': 'Token 9335ac8899b3e3664ba6b66eb2ac9aebecb8f735',
            }
        }).then(response => {
            this.users = response.data
            this.$store.state.users = response.data
            console.log(this.$store.state.users[0].email)
            if ((this.$store.state.users[0].email == this.$store.state.email) && this.$store.state.users[0].password == this.$store.state.password) {
                console.log('You are logged in!')
                this.$cookies.set('user_session', 'Yes', 60*60*24)
                this.$store.state.logged = true;
                this.$router.push('/')
            }else {
                console.log('You are not logged in!')
            }
        });
    },
    remove: function() {
        this.$store.state.users.pop()
    }
  },
  computed: {
    total(){
      return this.$cookies.get('user_session')
    }
  },
};
</script>

<style>

.form-elegant .font-small {
font-size: 0.8rem; }

.form-elegant .z-depth-1a {
-webkit-box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25);
box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25); }

.form-elegant .z-depth-1-half,
.form-elegant .btn:hover {
-webkit-box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28), 0 4px 15px 0 rgba(36, 133, 255, 0.15);
box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28), 0 4px 15px 0 rgba(36, 133, 255, 0.15); }
</style>
