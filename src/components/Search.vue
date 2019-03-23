<template>
  <mdb-container>
    <mdb-row>
      <mdb-col md="10">
        <vue-simple-suggest
          v-on:select="getData(chosen)"
          v-model="chosen"
          :list="simpleSuggestionList"
          :filter-by-query="true"
          >
          <!-- Filter by input text to only show the matching employees -->
        </vue-simple-suggest>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>
 
<script>
  import {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn,
  } from 'mdbvue';
  import Api from '@/Api';
  import axios from 'axios';
  import VueSimpleSuggest from 'vue-simple-suggest';
  import 'vue-simple-suggest/dist/styles.css' ;// Optional CSS
 
  export default {
    components: {
      VueSimpleSuggest,
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbBtn,
    },
    data() {
      return {
        chosen: '',
        employees: [],
        empNames: []
      }
    },
    mounted() {
      Api().get('/employe/?format=json').then(response => {
        this.employees = response.data
        this.$store.state.employeList = this.employees;
        for (let index = 0; index < this.employees.length; index++) {
          const element = this.employees[index];
          this.empNames[index] = element.firstname;
        }
      });
    },
    methods: {
      simpleSuggestionList() {
        /*return [
          'Vue.js',
          'React.js',
          'Angular.js',
          'Employe1',
          'Emplo',
          'Employ2',
          'Employe3',
          'Employe5',
          'Employe4',
        ]*/
        return this.empNames
      },
      getData(events) {
        console.log('emitted' + events);
        for (let index = 0; index < this.employees.length; index++) {
          const element = this.employees[index];
          if (element.firstname == events) {
            console.log('Success')
            localStorage.setItem('employe', JSON.stringify(element));
            this.$router.push({
              path: '/alltax'
            })
          }
        }
      }
    }
  }
</script> 