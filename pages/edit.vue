<template>
    <div class="container">
        <div class="mb-4">
            <label class="mb-2">Caption</label>
            <input v-model="input.caption" class="form-control" placehoder="キャプションを書く..."/>
        </div>
        <div class="mb-4">
            <label class="mb-2">Image</label> 
            <input type="file" class="form-control" id="file" @change="onUploadFile">
        </div>
        <div v-if="input.img_url" class="form-group">
            <label class="mb-2 d-block">Preview</label>
            <img :src="input.img_url">
        </div>

        <button class="btn btn-primary" @click="post" :disabled="state.is_loading">Submit</button>
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
                img_url: '',
                
                tags:    [
                ] 
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

                //Tag自動取得
                const tag_name = await this.$store.dispatch('post/getTags', this.input.img_url)

                const condition = ['T', 'E', 'A', 'M', 'L', 'A', 'B'] 

                //tag nameが"TEAMLAB"始まりならtaskクリア
                if(condition.indexOf(tag_name.slice(0, 1))>= 0){
                    await this.$store.dispatch('post/createTask', tag_name.slice(0, 1))
                }
                
                this.input.tags.push({
                 name: tag_name   
                })

                

                //投稿作成
                await this.$store.dispatch('post/create', this.input)
                
                //投稿成功処理
                this.$notify({
                    type : "success",
                    title: '投稿完了',
                    text : '新規投稿が完了しました！'
                });

                this.$router.push('/')

            }catch(e){

                //tagsをリセット
                this.input.tags = []

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

            console.log(file.type)
            
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