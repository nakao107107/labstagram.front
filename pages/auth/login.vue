<template>
    <div class="container d-flex justify-content-center">
        <button @click="login" class="btn btn-black btn-round"><i class="fab fa-github mr-2"></i>Login with github</button>
    </div>
</template>

<script>
export default {

    fetch({store, redirect}){

        //ログイン状態であればトップページにredirect
        if(store.state.user.current_user.id){
            return redirect('/')
        }

    },

    methods: {
        async login(){
            this.$router.push('/auth/redirect')
        }
    },
    
}
</script>

<style scoped>
</style>