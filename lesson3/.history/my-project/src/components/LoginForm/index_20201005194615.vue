<template>
  <div>
    <div>
      <label>
        Login
        <input type="text" v-model="login" placeholder="Input login here" />
      </label>
    </div>
    <div>
      <label>
        Password
        <input type="text" v-model="password" placeholder="Input pass here" />
      </label>
    </div>
    <button :disabled="!isDataValid" @click="onLogin">Go</button>
    <div :class="{ 'message-ok': authResult, 'message-error': authResult===false }">
      {{ message }}
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginForm",
  props: {
    loginsList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      login: null,
      password: null,
      authResult: null,
    };
  },
  computed: {
    isDataValid() {
      return this.login && this.password;
    },
    message(){
        if (this.authResult) return "Welcome!"
        if (this.authResult === false ) return "Login or password is incorrect!"
        return 'Input login and password'     
        
    }
  },
  methods: {
    onLogin() {
      if (this.login && this.password) {
        this.authResult = null;
        const user = this.loginsList.find(
          (item) => item.log === this.login && item.pass === this.password
        );
        // if (user) alert("Ok");
        // else alert("No");
        if (user) {
        //   this.message = "Welcome!";
          this.authResult = true;
        } else {
        //   this.message = "Login or password is incorrect";
          this.authResult = false;
        }
      }
      // loginsList=[
      //     {
      //         log:'Vasja',
      //         pass:'123'
      //     },
      //     {
      //         log:'Petja',
      //         pass:'2222'
      //     },
      //     {
      //         log:'Olga',
      //         pass:'1111'
      //     },
      // ]
    },
  },
};
</script>
<style lang="scss" scoped>
.message{
    &--ok{
        color: blue;
    }
    &--error{
        color: red;
    }
}
/* .message-ok {
  color: blue;
} */
/* .message-error {
  color: red;
} */
</style>
