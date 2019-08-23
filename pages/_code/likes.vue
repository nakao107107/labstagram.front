<template>
    <div class="container">
        <h4 class="font-weight-bold">Likes</h4>
        <ul>
            <user-card v-for="like in like_post({post_id: id})" :key="like.id" :like="like"/>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserCard from '~/components/like/UserCard.vue'

export default {

    async fetch({store, error}){

        try{

            await store.dispatch('like/init')

        }catch(e){

            //初期化エラー処理
            error({ statusCode: 500 })

        }

    },

    data(){
        return {
            id: 0
        }
    },

    components: {
        UserCard
    },

    created() {
        this.id = Number(this.$route.params.code)
    },

    computed: {
        ...mapGetters('like', ['like_post'])
    },

    
}
</script>

<style scoped>
</style>