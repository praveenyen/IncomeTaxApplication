import Vue from 'vue';
import './plugins/vuetify'
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/build/css/mdb.css';
import 'vuetify/dist/vuetify.min.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueCookies from 'vue-cookies';
import AutoComplete from 'v-autocomplete';
import VueSimpleSuggest from 'vue-simple-suggest';
import 'vue-simple-suggest/dist/styles.css';
import 'v-autocomplete/dist/v-autocomplete.css';


Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(Vuetify);
Vue.use(VueCookies);
Vue.use(AutoComplete);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
