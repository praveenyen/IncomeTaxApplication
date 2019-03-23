<template>
    <mdb-jumbotron>
        <h1>You are in Dashboard home</h1>
        <Chart/>
    </mdb-jumbotron>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbBtn,
  mdbJumbotron,
  mdbInput,
  FormInline
} from 'mdbvue';
import Chart from '@/components/Chart.vue';
export default {
    components: {
        mdbJumbotron,
        mdbContainer,
        mdbRow,
        mdbCol,
        mdbBtn,
        mdbInput,
        FormInline,
        Chart
    },
    data() {
        return {
            sample: '',
        }
    },
}
</script>

<style>

</style>
