<template>
    <div>
        <p>Githubへリダイレクトしています</p>
    </div>
</template>

<script>
export default {

    data(){
        return{
            redirect_url : ''
        }
    },

    async fetch({store, redirect}){
        await store.dispatch('auth/login')
        return redirect(store.state.auth.redirect_url)
    }

}
</script>

<style>
</style>