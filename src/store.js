import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    employeList: [],
    users: [],
    email: '',
    password: '',
    cookie: '',
    logged: '',
    employe: {
      id: '',
      name: '',
      email: '',
      phno: '',
      password: ''
    },
    empTaxData: [],
    name: 'Praveen',
    posturl: 'http://localhost:8000/api/user/',
    url: 'http://localhost:8000/api/user/?format=json&username='
  },
  mutations: {
    addToEmploye(state, value) {
      state.employeList = value;
    }
  },
  actions: {
    addToEmploye(context, value){
      context.commit('AddToEmploye', value)
    }
  },
  getters: {
    users: state => state.users,
    name: state => state.name,
    logged: state => state.logged,
    empTaxData: state => state.empTaxData,
    loading: state => state.loading,
    employeList: state => state.employeList,
  }
});
