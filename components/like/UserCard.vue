<template>
    <div class="card" @click="goUserPage">
        <div class="row">
            <img :src="`https://github.com/${like.user.github_id}.png`" class="col-2">
            <p class="col-10">{{like.user.name}}</p>
        </div>
    </div>
</template>

<script>
export default {
    
    props: [
        "like"
    ],

    methods: {
        goUserPage(){
            this.$router.push(`/users/${this.like.user.id}`)
        }
    }
}
</script>

<style scoped>
</style>