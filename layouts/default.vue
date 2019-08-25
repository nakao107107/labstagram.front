<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-white">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img src="https://fontmeme.com/permalink/190823/8281c7dfdec86dbb0a5eddd56fdc821f.png" alt="font-instagram" border="0" height="30">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
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
              <a class="nav-link" @click="logout">LOGOUT</a>
            </li>
            <li class="nav-item" v-else>
              <a class="nav-link" href="/auth/login">LOGIN</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <no-ssr>
      <notifications width="100%" position="bottom"/>
    </no-ssr>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js" integrity="sha384-o+RDsa0aLu++PJvFqy8fFScvbHFLtbvScb8AjopnFD+iEQ7wo/CG0xlczd+2O/em" crossorigin="anonymous"></script>
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
