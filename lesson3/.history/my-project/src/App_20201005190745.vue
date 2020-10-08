<template>
  <div id="app">
    <login-form login-list = "myUserList"/>
  </div>
</template>

<script>
import LoginForm from './components/LoginForm'
import myUserList from "./setings"
// import { myMessage,myMessage2 } from "./setings"

export default {
  name: 'App',
  components: {
    LoginForm
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
