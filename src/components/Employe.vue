<template>
    <mdb-card border="true">
        <mdb-row>
            <mdb-col md="5">
                <h1>{{ employe.firstname }}</h1>
            </mdb-col>
            <mdb-col md="5">
                <h1>{{ employe.email }}</h1>
            </mdb-col>
            <mdb-col md=2>
                <mdb-btn @click="$emit('update-tax', employe)" color="primary">View</mdb-btn>
            </mdb-col>
        </mdb-row>
    </mdb-card>
</template>

<script>
import {
    mdbContainer,
    mdbBtn,
    mdbCard,
    mdbCol,
    mdbRow,

} from 'mdbvue';
export default {
    components: {
        mdbContainer,
        mdbBtn,
        mdbCard,
        mdbCol,
        mdbRow
    },
    props: ['employe']
}
</script>

<style>

</style>
