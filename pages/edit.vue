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