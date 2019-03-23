<template>
    <mdb-jumbotron>
        <h1>View Employee</h1>
        <AllEmploye/>
    </mdb-jumbotron>
</template>

<script>
import AllEmploye from '@/views/AllEmploye.vue';
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbBtn,
  mdbJumbotron
} from 'mdbvue';
export default {
    components: {
        AllEmploye,
        mdbContainer,
        mdbRow,
        mdbCol,
        mdbBtn,
        mdbJumbotron
    },
    data() {
        return {
            
        }
    },
}
</script>

<style>

</style>
