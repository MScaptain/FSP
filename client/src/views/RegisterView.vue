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
        }, 3000);
    },
    methods: {
        async register(){
            const response =  await authenticationservise.register({
                email:this.email,
                password:this.password,
            })
            
            const data = response.data;

            console.log(data);
       
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
    type="password"
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

