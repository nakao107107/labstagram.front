<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-white">
      <div class="container">
        <a class="navbar-brand">
          <img src="https://fontmeme.com/permalink/190823/8281c7dfdec86dbb0a5eddd56fdc821f.png" alt="font-instagram" border="0" height="30">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/edit">Post</a>
            </li>
            <li class="nav-item" v-if="token">
              <a class="nav-link" @click="logout">ログアウト</a>
            </li>
            <li class="nav-item" v-else>
              <a class="nav-link" href="/auth/login">ログイン</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <no-ssr>
      <notifications width="100%" position="bottom"/>
    </no-ssr>
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
