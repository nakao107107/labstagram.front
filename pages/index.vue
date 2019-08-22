<template>
  <div class="container">
    <h1>投稿一覧</h1>
    <div class="row">
      <post-card v-for="post in posts" :key="post.id" :post="post"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PostCard from '~/components/index/PostCard.vue'

export default {

  components: {
    PostCard
  },

  async fetch({store}){
      await store.dispatch('user/initCurrent')
      await store.dispatch('post/init')
      await store.dispatch('like/init')
  },

  computed: {
      ...mapGetters('post', ['posts'])
  }

}

</script>

<style>

</style>
