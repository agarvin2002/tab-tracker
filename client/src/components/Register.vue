<template>
  <div class="app">
    <h1>Register</h1>
    <input type="email" v-model="email" name="emai" placeholder="email">
    <br>
    <input type="password" v-model="password" name="password" placeholder="password">
    <br>
    <button @click="register">Register</button>
  </div>
</template>
<script>
import AuthenticationService from '../services/AuthenticationService';
export default {
  data () {
    return {  
      email:'',
      password:''
    }
  },
  methods: {
    async register(){
      await AuthenticationService.register({
        email:this.email,
        password:this.password
      })
    }
  }
}
</script>
<style scoped>

</style>
