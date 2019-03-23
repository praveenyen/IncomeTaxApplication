<template>
  <mdb-jumbotron class="mb-0">
    <mdb-row >
      <mdb-col md=4>
          <mdb-input type="number" icon="arrow-alt-circle-right" label="basicPay" v-model="monthTax.BasicPay"/>
      </mdb-col>
      <mdb-col md=4>
          <mdb-input type="number" icon="arrow-alt-circle-right" label="FP" v-model="monthTax.FP"/>
      </mdb-col>
      <mdb-col md=4>
          <mdb-input type="number" icon="arrow-alt-circle-right" label="DA" v-model="monthTax.DA"/>
      </mdb-col>
      <mdb-col md=4>
          <mdb-input type="number" icon="arrow-alt-circle-right" label="HRA" v-model="monthTax.HRA"/>
      </mdb-col>
      <mdb-col md=4>
          <mdb-input type="number" icon="arrow-alt-circle-right" label="CCA" v-model="monthTax.CCA"/>
      </mdb-col>
      <mdb-col md=4>
          <mdb-input type="number" icon="arrow-alt-circle-right" label="GPF" v-model="monthTax.GPF"/>
      </mdb-col>
      <mdb-col md=4>
          <mdb-input type="number" icon="arrow-alt-circle-right" label="APGLI" v-model="monthTax.APGLI"/>
      </mdb-col>
      <mdb-col md=4>
          <mdb-input type="number" icon="arrow-alt-circle-right" label="GIS" v-model="monthTax.GIS"/>
      </mdb-col>
      <mdb-col md=4>
          <mdb-input type="number" icon="arrow-alt-circle-right" label="PT" v-model="monthTax.PT"/>
      </mdb-col>
      <mdb-col md=4>
          <mdb-input type="number" icon="arrow-alt-circle-right" label="PRI" v-model="monthTax.PRI"/>
      </mdb-col>
      <mdb-col md=4>
          <mdb-input type="number" icon="arrow-alt-circle-right" label="Int" v-model="monthTax.Int"/>
      </mdb-col>
      <mdb-col md=4>
          <mdb-input type="number" icon="arrow-alt-circle-right" label="EWF" v-model="monthTax.EWF"/>
      </mdb-col>
      <mdb-col md=4>
          <mdb-input type="number" icon="arrow-alt-circle-right" label="LIC" v-model="monthTax.LIC"/>
      </mdb-col>
      <mdb-col md=4>
          <mdb-input type="number" icon="arrow-alt-circle-right" label="IT" v-model="monthTax.IT"/>
      </mdb-col>

    </mdb-row>
    <mdb-btn color="success" @click="save()" :disabled="$store.state.loading">
        <span v-if="$store.state.loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Save
        </mdb-btn>
    <mdb-btn color="danger" @click="show()">Reset</mdb-btn>
    <p v-if="saved">Success {{ monthTax.basicPay }} {{ monthTax.month }} {{ monthTax.year }} {{ monthTax.empId }}</p>
    <p >{{ result }}</p>

  </mdb-jumbotron>
</template>
<script>
import axios from 'axios';
import {
  mdbNumericInput,
  mdbInput,
  mdbRow,
  mdbCol,
    mdbCard,
    mdbBtn,
    mdbJumbotron
} from 'mdbvue';
export default {
    components:{
      mdbNumericInput,
      mdbInput,
      mdbRow,
      mdbCol,
      mdbCard,
        mdbBtn,
        mdbJumbotron
    },
    props: ['months', 'upd'],
    data: () => ({
        update: false,
      result: '',
      samp: '',
      saved: false,
      monthTax: {
        empId: '',
        month: '',
        BasicPay: '',
        FP: '',
        DA: '',
        HRA: '',
        CCA: '',
        GPF: '',
        APGLI: '',
        GIS: '',
        PT: '',
        PRI: '',
        INT: '',
        EWF: '',
        LIC: '',
        IT: ''
      }
    }),
    methods: {
      save() {
          if (this.upd !== undefined) {
              console.log('Update given' + this.monthTax.id)
              this.$store.state.loading = true;
                this.saved = true;
                localStorage.setItem('update', false)
                console.log('tax id in monthtax'+ this.months.taxId)
                axios.put('http://localhost:8000/api/tax/'+ this.months.taxId + '/', this.monthTax).then(response => {
                    this.result = response;
                    console.log('update success' + localStorage.getItem('update'));
                    this.$store.state.loading = false;
                })
          } else {
              this.$store.state.loading = true;
                this.saved = true;
                axios.post('http://localhost:8000/api/tax/', this.monthTax).then(response => {
                    this.result = response;
                    this.$store.state.loading = false;
                    console.log('Create success!' + localStorage.getItem('update'));
                })
              console.log('Not given')
          }
      },
      show() { 
        this.$store.state.loading = false;
      },
    },
    mounted() {
        this.update = localStorage.getItem('update')
      this.monthTax.month = this.months.month;
      this.monthTax.year  = new Date().getFullYear();
      this.monthTax.empId = (JSON.parse(localStorage.getItem('employe'))).empId;
      ///console.log(this.monthTax.month);
    },
}
</script>

<style>

</style>
