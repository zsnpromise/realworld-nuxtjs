<template>
<div class="auth-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">{{ isLogin ? 'Sign in' : 'Sign up' }}</h1>
        <p class="text-xs-center">
            <nuxt-link v-if="isLogin" to="/register">Need an account?</nuxt-link>
            <nuxt-link v-else to="/login">Have an account?</nuxt-link>
          <!-- <a href="">Have an account?</a> -->
        </p>

        <ul class="error-messages">
           <template v-for="(value, key) in errors">
             <li v-for="(msg, index) in value" :key="index">{{ key }} {{ msg }}</li>
          </template>  
        </ul>

        <form @submit.prevent="onSubmit">
          <fieldset class="form-group" v-if="!isLogin">
            <input class="form-control form-control-lg" v-model="user.username" type="text" placeholder="Your Name" required>
          </fieldset>
          <fieldset class="form-group">
            <input class="form-control form-control-lg" v-model="user.email" type="email" placeholder="Email" required>
          </fieldset>
          <fieldset class="form-group">
            <input class="form-control form-control-lg" v-model="user.password" type="password" minlength="8" placeholder="Password" required>
          </fieldset>
          <button class="btn btn-lg btn-primary pull-xs-right">
            {{ isLogin ? 'Sign in' : 'Sign up' }}
          </button>
        </form>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import { login, register } from '../../api/user.js'

// 仅在客户端加载 js-cookie 包
const Cookie = process.client ? require('js-cookie') : undefined

export default {
   name: 'login',
   middleware: 'noauth',
   data () {
      return {
        user: {
          username: '',
          email: '',
          password: ''
        },
        errors: []
      }
   },
   computed: {
       isLogin() {
           return this.$route.name === 'login'
       }
   },
   methods: {
      async onSubmit() {
        try {
          let { data } = this.isLogin ? await login({user: this.user}) : await register({user: this.user})
          this.$store.commit('setUser', data.user)
          Cookie.set('user', data.user)
          this.$router.push('/')
        } catch (err) {
          this.errors = err.response.data.errors
        }
      }
   }
}
</script>

<style>

</style>