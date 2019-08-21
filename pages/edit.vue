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
        <input type="file" @change="onUploadFile">
        <button @click="post">投稿</button>
        {{input}}
    </div>
</template>

<script>
export default {

    data(){
        return {
            input: {
                file: ''
            },
        }
    },

    methods: {
        async post(){
            let formData = new FormData
            formData.append('caption', this.input.caption)
            formData.append('img_url', this.input.img_url)
            formData.append('file', this.input.file[0])
            await this.$store.dispatch('post/create', formData)
            this.$router.push('/')
        },

        onUploadFile(event){
            this.input.file = event.target.files
        }
    },
    
}
</script>

<style scoped>
    
</style>