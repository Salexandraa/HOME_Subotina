<template>
  <div id="app">
   <login-form :logins-list= "myUserList"/>
   <login-hw :login-list = "userList2"/>
  </div>
</template>

<script>
import LoginForm from './components/LoginForm'
import myUserList from "./setings"
// import { myMessage,myMessage2 } from "./setings"
import LoginHW from './components/LoginHW'
import userList2 from './setings'

export default {
  name: 'App',
  components: {
    LoginForm,
    LoginHW
  },
  data() {
    return {
      myUserList
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
