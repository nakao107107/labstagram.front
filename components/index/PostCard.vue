<template>
    <div class="col-3 p-1">
        <div class="card">
            <p>{{post.user.name}}</p>
            <img :src="post.img_url">
            <p>{{post.caption}}</p>
            <button @click="like">{{like_el({user_id: 2, post_id: post.id}).length == 0 ? 'いいね！': 'いいね取り消し'}}</button>
            <button @click="checkLikeUser(post.id)" class="btn btn-success">いいねしたuser</button>
            <button @click="deletePost(post.id)" class="btn btn-danger" v-if="current_user.id == post.user.id">投稿の削除</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

    props: ["post"],

    computed: {
      ...mapGetters('like', ['likes', 'like_el']),
      ...mapGetters('user', ['current_user'])
    },

    methods: {
        async like(){

            let input = {
                'post_id': this.post.id
            }
            await this.$store.dispatch('like/create', input)
            await this.$store.dispatch('like/init')
        },

        checkLikeUser(id){
            this.$router.push(`/${id}/likes`)
        },

        async deletePost(post_id){
            await this.$store.dispatch('post/delete', post_id)
            await this.$store.dispatch('post/init')
        }
    }
    
}
</script>