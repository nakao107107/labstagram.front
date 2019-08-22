<template>
    <div class="container">
        <div class="form-group">
            <label>キャプション</label>
            <input v-model="input.caption"/>
        </div>
        <div class="form_group">
            <input type="file" @change="onUploadFile">
            <div v-if="input.img_url">
                <p>プレビュー</p>
                <img :src="input.img_url">
            </div>
        </div>

        <button @click="post">投稿</button>
        {{input}}
    </div>
</template>

<script>
export default {

    fetch({store, redirect}){
        //ログアウト状態であればログインページにredirect
        if(! store.state.user.current_user.id){
            return redirect('/auth/login')
        }
    },

    data(){
        return {
            input: {
                caption: '',
                img_url: ''
            },
        }
    },

    methods: {
        async post(){
            await this.$store.dispatch('post/create', this.input)
            this.$router.push('/')
        },

        onUploadFile(e) {
            let files = e.target.files || e.dataTransfer.files;

            let reader = new FileReader();
            reader.onload = (e) => {
                this.input.img_url = e.target.result;
            };
            reader.readAsDataURL(files[0]);


        }
    },
    
}
</script>

<style scoped>
    
</style>