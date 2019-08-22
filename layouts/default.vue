<template>
  <div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">チームラボインスタグラム</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/edit">投稿</a>
        </li>
        <li class="nav-item" v-if="token">
          <a class="nav-link" @click="logout">ログアウト</a>
        </li>
        <li class="nav-item" v-else>
          <a class="nav-link" href="/auth/login">ログイン</a>
        </li>
      </ul>
    </div>
  </nav>
    <nuxt />
  </div>
</template>

<script>
export default {
  computed: {
    token(){
      return this.$store.state.auth.cookies.token
    }
  },
  methods: {
    logout(){
      this.$store.dispatch('auth/logout')
    }
  }
}
</script>

<style>
</style>
