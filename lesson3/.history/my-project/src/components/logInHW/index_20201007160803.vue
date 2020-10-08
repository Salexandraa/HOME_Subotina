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
    {{messageResult}}
</div>
    </div>
</template>

<script>
// Задача 1. Вводимо логіна і пароль. Якщо логін вірний відображаємо смайл. Якщо ні, то:
// 1) якщо логін = Іван – колір повідомлення про помилку синій
// 2) якщо хтось інший, то колір повідомлення червоний

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
                // message() {
                //     if(this.authResult)return "Welcome!"
                //     if(this.authResult === false) return "Login or password is incorrect!"
                //     return 'Input login and password'
                // }
            },
            methods: {

                onLogin() {
                    if(this.login && this.password){
                        this.authResult === null
                        const user = this.loginList.find((item)=>item.log===this.login && item.pass===this.password)
                    if(user){
                        this.messageResult = 'https://st.depositphotos.com/1967477/1843/i/450/depositphotos_18438047-stock-photo-happy-smiley-emoticon-face.jpg'
                    }else{
                        this.messageResult =  "Login or password is incorrect"
                    }
                    }
                    
                }
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>