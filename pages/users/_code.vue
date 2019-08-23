<template>
    <div class="container">
        <div class="row d-flex align-items-center mb-4 p-2">
            <img :src="`https://github.com/${user.github_id}.png`" class="rounded-circle mr-3" width="15%">
            <h3 class="mb-0">{{user.name}}</h3>
        </div>
        <div class="row">
            <img v-for="post in user.posts" :key="post.id" :src="post.img_url" class="clip-img col-4 p-1 rounded"/>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

    async fetch({route, store}){

        try {

            await store.dispatch('user/init', route.params.code)

        }catch(e){

            //初期化エラー処理
            error({ statusCode: 500 })

        }
        
        

    },

    computed: {
        ...mapGetters('user', ['user'])
    }
    
}
</script>

<style scoped>

.clip-img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
}

</style>