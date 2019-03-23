<template>
    <mdb-jumbotron>
        <h2>Create New Employe</h2>
        <div class="form-group">
            <mdb-row>
                <mdb-col md="4">
                    <mdb-input label="Employe Id" size="md" />                    
                </mdb-col>
                <mdb-col md="4">
                    <mdb-input label="Employe Name" size="md" />                    
                </mdb-col>
                <mdb-col md="4">
                    <mdb-input label="DOB" size="md" />                    
                </mdb-col>
                <mdb-col md="4">
                    <mdb-input label="Department" size="md" />                    
                </mdb-col>
                <mdb-col md="4">
                    <mdb-input label="Designation" size="md" />                    
                </mdb-col>
                <mdb-col md="4">
                    <mdb-input label="Email" size="md" />                    
                </mdb-col>
                <mdb-col md="4">
                    <mdb-input label="Phone Number" size="md" />                    
                </mdb-col>
                <mdb-col md="4">
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" name="radioInline" class="custom-control-input" id="defaultInline1">
                        <label class="custom-control-label" for="defaultInline1">Male</label>
                    </div>

                        <!-- Default inline 2-->
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" name="radioInline" class="custom-control-input" id="defaultInline2">
                        <label class="custom-control-label" for="defaultInline2">Female</label>
                    </div>                  
                </mdb-col>
                
            </mdb-row>
            <mdb-btn color="success">Save</mdb-btn>
            <mdb-btn color="danger">Cancel</mdb-btn>
        </div>
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
export default {
    components: {
        mdbJumbotron,
        mdbContainer,
        mdbRow,
        mdbCol,
        mdbBtn,
        mdbInput,
        FormInline
    },
    data() {
        return {
            
        }
    },
}
</script>

<style>

</style>
