<template>
    <div class="col-lg-4 col-md-6 p-1">
        <div class="card">
            <div class="p-3 d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center" @click="goUserPage(post.user.id)">
                    <img :src="`https://github.com/${post.user.github_id}.png`" class="rounded-circle mr-2" width="30rem">
                    <h6 class="text-uppercase">{{post.user.name}}</h6>
                </div>
                <button @click="deletePost(post.id)" class="btn btn-icon btn-round btn-danger">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <img :src="post.img_url" alt="投稿画像" class="clip-img">
            <div class="p-3">
                <p class="mb-3 text-dark">{{post.caption}}</p>
                <div class="d-flex justify-content-between">
                    <a @click="like" :disabled="! current_user.id">
                        <i class="far fa-heart text-danger" v-if="like_user_post({user_id: current_user.id, post_id: post.id}).length == 0"></i>
                        <i class="fas fa-heart text-danger" v-else></i>
                    </a>
                    <a @click="checkLikeUser(post.id)"><i class="far fa-user"></i></a>
                </div>
            </div>
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

                //投稿成功処理
                this.$notify({
                    type : "success",
                    title: '削除完了',
                    text : '削除が完了しました'
                });

            }catch(e){

                //投稿失敗処理
                this.$notify({
                    type : "error",
                    title: '投稿削除失敗',
                    text : '何らかの理由で投稿を削除できませんでした。開発者に問い合わせてください'
                });
                
            }
        
        },

        goUserPage(id){
            this.$router.push(`/users/${id}`)
        }
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