<template>
    <div>
        <button @click="login">githubでログイン</button>
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