<template>
    <div>
    <user-card v-for="like in like_el({user_id: 2, post_id: id})" :key="like.id" :like="like"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserCard from '~/components/like/UserCard.vue'

export default {

    data(){
        return {
            id: 0
        }
    },

    components: {
        UserCard
    },

    created() {
        this.id = Number(this.$route.params.code)
    },

    computed: {
        ...mapGetters('like', ['like_el'])
    },

    
}
</script>

<style scoped>
</style>