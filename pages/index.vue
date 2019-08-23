<template>
  <div class="container">
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

  async fetch({store, error}){

    try{

      await store.dispatch('user/initCurrent')
      await store.dispatch('post/init')
      await store.dispatch('like/init')

    }catch(e){

      //初期化エラー処理
      error({ statusCode: 500 })

    }
  },

  methods: {
    hideModal() {
      this.$refs['post-menu-modal'].hide()
    }
  },

  computed: {
      ...mapGetters('post', ['posts'])
  }

}

</script>

<style>

</style>
