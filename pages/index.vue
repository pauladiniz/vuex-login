<template lang="pug">
  .login
    input(placeholder="User", v-model="email")
    input(placeholder="Password" v-model="password" type="password")
    button(@click="handleLogin") Login 
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions ({
      setToken: 'login/ACTION_TOKEN'
    }),
    async handleLogin () {
      const params = {
        email: this.email,
        password: this.password
      }
      await axios.post('https://reqres.in/api/login', params)
        .then((res => {
          if(res.statusCode == '400') {
            console.log('ops')
          } else {
            sessionStorage.setItem('token', res.data.token)
            this.setToken(res.data.token)
            this.$router.push('/logged')
          }
        }))
    }
  },
  }
</script>

<style lang="stylus">
.login
  width 100%
  display flex
  flex-direction column
  justify-content center
  align-content center
  input 
    width 300px
    height 40px
    border-radius 10px
    border 1px solid #EAEAEA
    padding 20px
    margin 8px 0
  button
    width 300px
    height 40px
    background-color #000
    color #FFF
    cursor pointer
</style>