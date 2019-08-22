<template>
    <div>
        <img :src="`https://github.com/${user.github_id}.png`">
        <p>{{user.name}}</p>
        <div class="row">
            <img v-for="post in user.posts" :key="post.id" :src="post.img_url" class="clip-img col-3"/>
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
    height: 200px;
    object-fit: cover
}

</style>