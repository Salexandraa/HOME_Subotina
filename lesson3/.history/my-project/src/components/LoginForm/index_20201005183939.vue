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
                }

            },
        },
    }
</script>

<style lang="scss" scoped>

</style>