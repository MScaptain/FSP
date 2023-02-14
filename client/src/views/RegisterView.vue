<script >
import { renderSlot } from 'vue';
import authenticationservise from '../services/authenticationservise';
export default{
    data(){
        return{
            email:'',
            password:''
        }
    },
    mounted(){
        setTimeout(() => {
            this.email="hii"
            this.password="pass"
        }, 3000);
    },
    methods: {
        async register(){
           await authenticationservise.register({
                password:this.password,
                email:this.email,
            })

            
        }
    }

}
</script>

<template>
<div>
    <h1>Register</h1>
    <input
    type="email"
    name="email"
    v-model = "email"
    placeholder="email"
    />
    <br/>
    <input
    type="text"
    name="password"
    v-model = "password"
    placeholder="password"
    />
    <br/>
    <button @click="register">
        Register
    </button>

</div>

  <RouterView />
</template>

