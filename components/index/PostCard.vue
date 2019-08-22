<template>
    <div class="col-3 p-1">
        <div class="card">
            <p>{{post.user.name}}</p>
            <img :src="post.img_url" alt="投稿画像">
            <p>{{post.caption}}</p>
            <button @click="like" :disabled="! current_user.id">
                {{like_user_post({user_id: current_user.id, post_id: post.id}).length == 0 ? 'いいね！': 'いいね取り消し'}}
            </button>
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
      ...mapGetters('like', ['likes', 'like_user_post']),
      ...mapGetters('user', ['current_user'])
    },

    methods: {
        async like(){

            try {
                let input = {
                    'post_id': this.post.id
                }
                await this.$store.dispatch('like/create', input)
                await this.$store.dispatch('like/init')
            
            }catch(e){
                //like作成失敗処理
                this.$notify({
                    type : "error",
                    title: 'いいね失敗',
                    text : '何らかの理由でいいねできませんでした。開発者に問い合わせてください'
                });
            }

            
        },

        checkLikeUser(id){
            this.$router.push(`/${id}/likes`)
        },

        async deletePost(post_id){

            try {

                await this.$store.dispatch('post/delete', post_id)
                await this.$store.dispatch('post/init')

            }catch(e){

                //投稿失敗処理
                this.$notify({
                    type : "error",
                    title: '投稿削除失敗',
                    text : '何らかの理由で投稿を削除できませんでした。開発者に問い合わせてください'
                });
                
            }
        
        }
    }
    
}
</script>