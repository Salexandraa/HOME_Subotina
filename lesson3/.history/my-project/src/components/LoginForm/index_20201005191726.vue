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
                <input type="text" v-model="password" placeholder="Input pass here">
            </label>
        </div>
        <button @click="onLogin">Go</button>
        <div>{{message}}</div>
    </div>
</template>
<script>
    export default {
        name:"LoginForm",
        props: {
            loginsList: {
                type: Array,
                default: ()=>[]
            }
        },
        data() {
            return {
                login: null,
                password:null,
                message:null
            }
        },
        methods: {
            onLogin() {
                if(this.login && this.pass){
            const user=this.loginsList.find(item=>item.log===this.login&&item.pass===this.password)
            // if(user) alert('Ok')
            // else alert('No')
            if(user) this.message = 'Welcome!'
            else this.message = 'In correct'}
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
            }
        },
    }
</script>
<style lang="scss" scoped>
</style>