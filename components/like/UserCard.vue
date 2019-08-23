<template>
    <li @click="goUserPage">
        <div class="d-flex align-items-center">
            <img :src="`https://github.com/${like.user.github_id}.png`" class="rounded-circle p-0 mr-2" width="50">
            <h4 class="col-10 m-0">{{like.user.name}}</h4>
        </div>
    </li>
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