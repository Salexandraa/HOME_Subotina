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
            LginList: {
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
        },
    }
</script>

<style lang="scss" scoped>

</style>