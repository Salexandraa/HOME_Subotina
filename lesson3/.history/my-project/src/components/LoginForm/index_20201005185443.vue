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
    <button @click="onLogin">
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
                    label: null,
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
                    

// loginsList=[
//     {
//         log:'Vasja',
//         pass:'123'
//     },
//         {
//         log:'Petja',
//         pass:'123'
//     },
//         {
//         log:'Olga',
//         pass:'123'
//     }
// ]  
                }
            },
        },
    }
</script>

<style lang="css" scoped>

</style>