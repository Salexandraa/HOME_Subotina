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
<button @click = "onLogin"> Go </button>
<div>
    {{message}}
</div>
    </div>
</template>

<script>
    export default {
        name: "loginHW",
        props: {
            loginList: {
                type: Array,
                default: ()=>[] 
            },
            data() {
                return {
                    login: null,
                    password: null,
                    authResult:null
                }
            
            },
            computed: {
                message() {
                    if(this.authResult)return "Welcome!"
                    if(this.authResult === false) return "Login or password is incorrect!"
                    return 'Input login and password'
                }
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>