<template>
    <div class="container">
        <div class="form-group">
            <label>キャプション</label>
            <input v-model="input.caption"/>
        </div>
        <div class="form_group">
            <input type="file" id="file" @change="onUploadFile">
            <div v-if="input.img_url">
                <p>プレビュー</p>
                <img :src="input.img_url">
            </div>
        </div>

        <button @click="post" :disabled="state.is_loading">投稿</button>
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
            
            state: {
                is_loading: false
            }
        }
    },

    methods: {
        async post(){

            this.state.is_loading = true

            try {

                await this.$store.dispatch('post/create', this.input)
                this.$router.push('/')

            }catch(e){

                //投稿失敗処理
                this.$notify({
                    type : "error",
                    title: '投稿失敗',
                    text : '投稿に失敗しました。入力の形式を確認してください'
                });
                this.state.is_loading = false

            }
            
        },

        onUploadFile(e) {

            let inputFile = document.getElementById('file');
            let file = e.target.files[0];
            
            //画像の種類のvalidation
            if ( file.type !== 'image/jpeg' ) {
                this.$notify({
                    type : "error",
                    title: '画像アップロード失敗',
                    text : '画像のアップロードに失敗しました。許容されている形式はjpegのみです'
                });
                this.input.img_url = ''
                inputFile.value = ''
                return
            }


            //画像のサイズのvalidation
            if ( file.size > 10000000 ) {
                this.$notify({
                    type : "error",
                    title: '画像アップロード失敗',
                    text : '画像のアップロードに失敗しました。画像のサイズが大きすぎます'
                });
                this.input.img_url = ''
                inputFile.value = ''
                return
            }
            10000000

            let reader = new FileReader();
            reader.onload = (e) => {
                this.input.img_url = e.target.result;
            };
            reader.readAsDataURL(file);


        }
    },
    
}
</script>

<style scoped>
    
</style>