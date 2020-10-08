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
<button :disabled="!isDataValid" @click ="onLogin"> Go </button>
<div class="message"
    :class ="{'message-ok': authResult , 'message-error': authResult===false}"
    >{{messageResult}}
</div>
<div v-if="authResult">
    =)
</div>
    </div>
</template>

<script>
// Задача 1. Вводимо логіна і пароль. Якщо логін вірний відображаємо смайл. Якщо ні, то:
// 1) якщо логін = Іван – колір повідомлення про помилку синій
// 2) якщо хтось інший, то колір повідомлення червоний
//import Img from "../components/assets/img"
    export default {
        name: "loginHW",
       
        props: {
            loginsList: {
                type: Array,
                default: ()=>[] ,
            
            },
            // image:{
            //     type:String,
            //     default: 'https://st.depositphotos.com/1967477/1843/i/450/depositphotos_18438047-stock-photo-happy-smiley-emoticon-face.jpg'
            // },
        },
            data() {
                return {
                    login: null,
                    password: null,
                    authResult:null,
                    
                  
                }
            
            
            },
            computed: {
                isDataValid(){
                    return this.login && this.password
                },
                messageResult() {
                    if(this.authResult)return "Welcome!"
                    if(this.authResult === false) return "Login or password is incorrect!"
                    return 'Input login and password'
                }
            },
            
            methods: {

                onLogin() {
                    if(this.login && this.password){
                        this.authResult = null;
                        const user = this.loginsList.find((item)=>item.log===this.login && item.pass===this.password)
                    if(user){
                        this.authResult= true
                    }else{
                        this.authResult= false
                    }
                    }
                    
                },
            
        },
    }
</script>

<style lang="css" scoped>
message{
    color: royalblue;
}
message-ok{
   
src: url('https://st.depositphotos.com/1967477/1843/i/450/depositphotos_18438047-stock-photo-happy-smiley-emoticon-face.jpg');
}
message-error{
    color: red;
}

</style>