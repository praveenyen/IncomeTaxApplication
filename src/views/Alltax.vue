<template>
    <mdb-container>
        <mdb-row>
            <mdb-col md="3">
                <img src="@/assets/logo.png" alt="user Profile Photo">
                <h1>{{ empObject.firstname }}</h1>
                <p>{{ empObject.empId }}</p>
                <p>{{ empObject.email }}</p>
                <p>{{ empObject.dob }}</p>
                <p>This is the user details. you can check full details of the user by clicking here</p>
                <h3>Education</h3>
                <p>This is the education details of the user</p>
                <h3>Experience</h3>
                <p>Experience of the users, you can also check this</p>
            </mdb-col>
            <mdb-col md="9">
                <v-tabs
                color="cyan"
                dark
                show-arrows
                >
                <v-tabs-slider color="yellow"></v-tabs-slider>
                <v-tab
                    v-for="i in months"
                    :key="i.id"
                    :href="'#' + i.month"
                >
                    {{ i.month }}
                </v-tab>
            
                <v-tabs-items>
                    <v-tab-item
                    v-for="i in months"
                    :key="i.id"
                    :value="i.month"
                    >
                    <v-card flat v-if="search(i.month, i.id)">
                        <MonthTax :months="i"/>
                    </v-card>
                    <v-card flat v-else>
                        <mdb-jumbotron class="mb-0 ">
                            <h1>You have already updated these details</h1>
                            <p>Click below button to edit</p>
                            <span>Tax Id{{  }}</span>
                            <mdb-btn color="warning" @click="editTax()">Edit</mdb-btn>
                            <MonthTax v-if="edit" :months="i" :upd="update"></MonthTax>
                        </mdb-jumbotron>
                    </v-card>
                    </v-tab-item>
                </v-tabs-items>
                </v-tabs>
            </mdb-col>
        </mdb-row>
    </mdb-container>
</template>

<script>
import {
    mdbJumbotron,
    mdbContainer,
    mdbBtn,
    mdbCol,
    mdbRow
} from 'mdbvue';
import axios from 'axios';
import MonthTax from '@/components/MonthTax.vue';
export default {
  data () {
    return {
        update: {
            up: true,
            taxid: '',
        },
      empObject: '',
      edit: false,
      foreach: '',
      tax: [],
      months: [
          {
              id: 1,
              taxId: '',
              completed : true,
              month     : 'April'
          },
          {
              id: 2,
              taxId: '',
              completed : true,
              month     : 'May'
          },
          {
              id: 3,
              taxId: '',
              completed : false,
              month     : 'June'
          },
          {
              id: 4,
              taxId: '',
              completed : false,
              month     : 'July'
          },
          {
              id: 5,
              taxId: '',
              completed : true,
              month     : 'August'
          },
          {
              id: 6,
              taxId: '',
              completed : false,
              month     : 'September'
          },
          {
              id: 7,
              taxId: '',
              completed : true,
              month     : 'October'
          },
          {
              id: 8,
              taxId: '',
              completed : true,
              month     : 'November'
          },
          {
              id: 9,
              taxId: '',
              completed : true,
              month     : 'December'
          },
          {
              id: 10,
              taxId: '',
              completed : false,
              month     : 'January'
          },
          {
              id: 11,
              taxId: '',
              completed : true,
              month     : 'February'
          },
          {
              id: 12,
              taxId: '',
              completed : false,
              month     : 'March',
          },
      ],
      dataUrl: '',
    }
  },
  components: {
      mdbJumbotron,
      MonthTax,
      mdbContainer,
      mdbBtn,
      mdbCol,
      mdbRow
  },
  mounted() {
      this.empObject = JSON.parse(localStorage.getItem('employe'));
        console.log(this.empObject.empId );
      axios.request({
          method: 'get',
          baseURL: 'http://localhost:8000/api/tax/?format=json&eid='+ this.empObject.empId
      }).then(response => {
          this.tax = response.data
          this.$store.state.empTaxData = response.data
      })
  },
  methods: {
      editTax() {
          this.edit = true
          localStorage.setItem('update', true)
      },
      search: function(mon, i){
        /*(this.$store.getters.empTaxData).forEach(element => {
            if (mon === element.month) {
                console.log(mon)
                console.log("break")
                console.log(element.month)
                this.foreach = true
            }
        });
        if (this.foreach) {
            console.log(this.foreach)
            return true
        }
        console.log('Before the return false')
            console.log(this.foreach)

        return false*/
        for (let index = 0; index < (this.tax).length; index++) {
            const element = this.tax[index];
            if (element.month === mon) {
                console.log(element.month)
                console.log(element.id + 'tax id' + this.tax[index].id)
                this.months[i-1].taxId = this.tax[index].id;
                console.log('Mon obj' + this.months[index].taxId + 'index value' + i)
                return false
            }
        }
        return true
      }
  },
}
</script>

<style>

</style>
