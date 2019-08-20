<template>
    <div class="container">
        <div class="form-group">
            <label>キャプション</label>
            <input v-model="input.caption"/>
        </div>
        <div class="form-group">
            <label>画像url</label>
            <input v-model="input.img_url"/>
        </div>
        {{input}}
        <button @click="post">投稿</button>
    </div>
</template>

<script>
export default {

    data(){
        return {
            input: {}
        }
    },

    created(){
        //input項目初期化
        this.input.user_id = 1
    },

    methods: {
        async post(){
            await this.$store.dispatch('post/create', this.input)
            this.$router.push('/')
        }
    },
    
}
</script>

<style scoped>
    
</style>