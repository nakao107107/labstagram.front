<template>
    <div class="col-3 p-1">
        <div class="card">
            {{like_el({user_id: 2, post_id: post.id}).length == 0}}
            <p>{{post.user.name}}</p>
            <img :src="post.img_url">
            <p>{{post.caption}}</p>
            <button @click="like">{{like_el({user_id: 2, post_id: post.id}).length == 0 ? 'いいね！': 'いいね取り消し'}}</button>
            <button>いいねしたuser</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

    props: ["post"],

    computed: {
      ...mapGetters('like', ['likes', 'like_el'])
    },

    methods: {
        async like(){

            let input = {
                'post_id': this.post.id,
                'user_id': 2
            }
            await this.$store.dispatch('like/create', input)
            await this.$store.dispatch('like/init')
        }
    }
    
}
</script>