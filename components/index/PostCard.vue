<template>
    <div class="col-3 p-1">
        <div class="card">
            <p>{{post.user.name}}</p>
            <img :src="post.img_url">
            <p>{{post.caption}}</p>
            <button @click="like">いいね！</button>
            <button>いいねしたuser</button>
        </div>
    </div>
</template>

<script>
export default {

    props: ["post"],

    methods: {
        async like(){

            let input = {
                'post_id': this.post.id,
                'user_id': 2
            }
            await this.$store.dispatch('like/create', input)
        }
    }
    
}
</script>