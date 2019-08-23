<template>
  <div class="container">
    <div class="row">
      <post-card v-for="post in posts" :key="post.id" :post="post"/>
    </div>
    <b-pagination
            align="center"
            :value="pager.page"
            :total-rows="pager.total"
            :per-page="pager.limit"
            @change="changePage"
            class="mt-4 mb-4"
    ></b-pagination>
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
    /*
    ページ変更
    */
    async changePage(page)
    {
        await this.$store.dispatch('post/changePage', page)
    },
  },

  computed: {
      ...mapGetters('post', ['posts', 'pager'])
  }

}

</script>

<style>

</style>
