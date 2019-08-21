<template>
    <div>
        <button @click="login">githubでログイン</button>
    </div>
</template>

<script>
export default {

    methods: {
        async login(){
            this.$router.push('/auth/redirect')
        }
    },
    
}
</script>

<style scoped>
</style>