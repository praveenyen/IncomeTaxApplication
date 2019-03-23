<template>
    <mdb-container>
        <section class="form-gradient">
            <mdb-row>
                <mdb-col md="5">
                <mdb-card>
                    <div class="header pt-3 peach-gradient">
                    <mdb-row class="d-flex justify-content-center">
                        <h3 class="white-text mb-3 pt-3 font-weight-bold">Sign Up</h3>
                    </mdb-row>
                    <mdb-row class="mt-2 mb-3 d-flex justify-content-center">
                        <a class="fa-lg p-2 m-2 fb-ic"><mdb-icon class="fab fa-facebook white-text fa-lg"/></a>
                        <a class="fa-lg p-2 m-2 tw-ic"><mdb-icon class="fab fa-twitter white-text fa-lg"/></a>
                        <a class="fa-lg p-2 m-2 gplus-ic"><mdb-icon class="fab fa-google-plus white-text fa-lg"/></a>
                    </mdb-row>
                    </div>
                    <card-body class="mx-4 mt-4">
                    <mdb-input label="Your name" type="text" v-model="name"/>
                    <mdb-input label="Your email" type="text" v-model="email"/>
                    <mdb-input label="Your password" type="password" containerClass="mb-0" v-model="password"/>
                    <mdb-row class="d-flex align-items-center mb-4 mt-5">
                        <mdb-col md="5" class="d-flex align-items-start">
                        <div class="text-center">
                            <mdb-btn @click="register()" color="grey" rounded type="button" class="z-depth-1a">SignUp</mdb-btn>
                        </div>
                        </mdb-col>
                        <mdb-col md="7" class="d-flex justify-content-end">
                        <p class="font-small grey-text mt-3">Have an account? <a href="#" class="dark-grey-text ml-1 font-weight-bold"> LogIn</a></p>
                        </mdb-col>
                    </mdb-row>
                    <p>result{{ result.data }}</p>
                    </card-body>
                </mdb-card>
                </mdb-col>
            </mdb-row>
        </section>
    </mdb-container>
</template>

<script>
import axios from 'axios';
import {
    cardBody,
    mdbContainer,
    mdbCard,
    mdbBtn,
    mdbInput,
    mdbCol,
    mdbRow,
    mdbCardBody
} from 'mdbvue';
export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            result: '',
            emp: {
                name: 'test',
                email: 'test@gmail.com',
                phno: '7730051853',
                password: '123'
            }
        }
    },
    components: {
        mdbCardBody,
        mdbContainer,
        mdbCard,
        mdbBtn,
        mdbInput,
        mdbCol,
        mdbRow
    },
    methods: {
        register() {
            axios.post('http://localhost:8000/api/employees/', this.emp,{
                headers: {
                    'Authorization': 'Token 9335ac8899b3e3664ba6b66eb2ac9aebecb8f735',
                },
                
            }).then(response => {
                this.result = response
            })
            /*axios.post('http://localhost:8000/api/user/', {
                headers: {
                    'Authorization': 'Token c0783c2cef1b49b186dcada77f0ac6c883e4ed1b',
                },
                body: [
                    this.name,
                    this.email,
                    this.password
                ]
            }).then( response => {
                console.log(response)
            })*/
        }
    }
}
</script>

<style>
.form-gradient .font-small {
font-size: 0.8rem; }

.form-gradient .header {
border-top-left-radius: .3rem;
border-top-right-radius: .3rem; }

.form-gradient input[type='text']:focus:not([readonly]) {
border-bottom: 1px solid #fd9267;
-webkit-box-shadow: 0 1px 0 0 #fd9267;
box-shadow: 0 1px 0 0 #fd9267; }

.form-gradient input[type='text']:focus:not([readonly]) + label {
color: #4f4f4f; }

.form-gradient input[type='password']:focus:not([readonly]) {
border-bottom: 1px solid #fd9267;
-webkit-box-shadow: 0 1px 0 0 #fd9267;
box-shadow: 0 1px 0 0 #fd9267; }

.form-gradient input[type='password']:focus:not([readonly]) + label {
color: #4f4f4f; }
</style>
