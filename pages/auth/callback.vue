<template>
    <div>
        
    </div>
</template>

<script>
export default {

    async fetch({store, route, redirect}){

        await store.dispatch('auth/callback', route.query)
        redirect('/')
    }
    
}
</script>

<style scoped>
</style>