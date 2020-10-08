<template>
    <div>
<div>
 <label>
      Login
     <input type="text" v-model="login" placeholder="Input login here">
 </label>
</div>
<div>
 <label>
     Password
     <input type="text" v-model="password" placeholder="Input password here">
 </label>
</div>
<div>
    <button @click="onLogin()">
        Go
    </button>
</div>
<div>{{message}}</div>
    </div>
</template>

<script>
    export default {
        name: "LoginForm",

        props: {
            loginsList: {
                type: Array,
                default: ()=>[]
            },
            data() {
                return {
                    login: null,
                    password: null,
                    massage: null
                }

            },
            computed: {
                name() {
                    return this.data 
                }
            },
            methods: {
                onLogin() {
                    const user = this.loginsList.find(item=>item.log===this.login && item.pass===this.password)
                    if (user) alert('ok') 
                     else alert('No')   
                    


                }
            },
        },
    }
</script>

<style lang="css" scoped>

</style>