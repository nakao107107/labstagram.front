<template>
    <div class="container">
        <div class="row d-flex align-items-center mb-4 p-2">
            <img :src="`https://github.com/${user.github_id}.png`" class="rounded-circle mr-3" width="15%">
            <h3 class="mb-0 font-weight-bold">{{user.name}}</h3>
        </div>
        <h4 class="font-weight-bold mb-2">Tasks</h4>
        <div class="mb-4">
            <span class="badge" :class="isFullfilledCondition('T') ? 'badge-danger'  : 'badge-default'">T</span>
            <span class="badge" :class="isFullfilledCondition('E') ? 'badge-primary' : 'badge-default'">E</span>
            <span class="badge" :class="isFullfilledCondition('A') ? 'badge-info'    : 'badge-default'">A</span>
            <span class="badge" :class="isFullfilledCondition('M') ? 'badge-success' : 'badge-default'">M</span>
            <span class="badge" :class="isFullfilledCondition('L') ? 'badge-warning' : 'badge-default'">L</span>
            <span class="badge" :class="isFullfilledCondition('A') ? 'badge-warning' : 'badge-default'">A</span>
            <span class="badge" :class="isFullfilledCondition('B') ? 'badge-warning' : 'badge-default'">B</span>
        </div>
        <h4 class="font-weight-bold mb-2">Posts</h4>
        <div class="row">
            <img v-for="post in user.posts" :key="post.id" :src="post.img_url" class="clip-img col-4 p-1 rounded"/>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

    async fetch({route, store}){

        try {

            await store.dispatch('user/init', route.params.code)

        }catch(e){

            //初期化エラー処理
            error({ statusCode: 500 })

        }
        
        

    },

    computed: {
        ...mapGetters('user', ['user'])
    },

    methods: {

        isFullfilledCondition(char){
            return this.user.tasks.filter(task => task.character === char).length > 0
        }
    }
    
}
</script>

<style scoped>

.clip-img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
}

</style>