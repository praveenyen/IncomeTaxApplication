<template>
    <mdb-container >
        <div v-for="emp in employeList" v-bind:key="emp.id">
            <Employe v-on:update-tax="updateTax(emp)" :employe="emp"></Employe>
        </div>
    </mdb-container>
</template>

<script>
import {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbCard,
    mdbCardBody
} from 'mdbvue';
import Employe from '@/components/Employe.vue';
export default {
    data() {
        return {
            employeList: [],
        }
    },
    components: {
        mdbCard,
        mdbBtn,
        mdbContainer,
        mdbRow,
        mdbCol,
        Employe
    },
    mounted() {
        this.employeList = this.$store.getters.employeList;
    },
    methods: {
        updateTax(employe) {
            localStorage.setItem('employe', JSON.stringify(employe))
            console.log(employe.email);
            this.$router.push({
                path: 'alltax',
                //query: {
                    ///email: employe.email
                //}
            });
        }
    },
}
</script>

<style>

</style>
