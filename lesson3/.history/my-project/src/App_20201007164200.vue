<template>
  <div id="app">
   <login-form :logins-list= "myUserList"/>
   <login-HW :loginList = "myUserList"/>
  </div>
</template>

<script>
import LoginForm from './components/LoginForm'
import myUserList from "./setings"
// import { myMessage,myMessage2 } from "./setings"
import loginHW from './components/loginHW'
// import userList2 from './setings'

export default {
  name: 'App',
  components: {
    LoginForm,
    loginHW
  },
  data() {
    return {
      myUserList,
      // userList2   }
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
