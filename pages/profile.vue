<template>
    <div>
        <img :src="`https://github.com/${user.github_id}.png`">
        <p>{{user.name}}</p>
        <img v-for="post in user.posts" :key="post.id" :src="post.img_url"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

    async fetch({store}){

        await store.dispatch('user/init')

    },

    computed: {
        ...mapGetters('user', ['user'])
    }
    
}
</script>

<style scoped>
</style>