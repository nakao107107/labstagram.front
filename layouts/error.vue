<template><div>

  <div class="display-3 text-danger"><i class="fa fa-warning"></i> {{error.statusCode}}</div>

  <template v-if="error.statusCode == 404">
    <h1 class="h2 font-w700 mt-30 mb-10">ページが見つかりません</h1>
    <h2 class="h3 font-w400 text-muted mb-50">お探しのページは見つかりませんでした</h2>
  </template>

  <template v-else>
    <h1 class="h2 font-w700 mt-30 mb-10">エラーが発生しました</h1>
    <h2 class="h3 font-w400 text-muted mb-50">時間をおいて再度お試しください</h2>
  </template>

</div></template>

<script>
export default {
  props : ['error'],
  layout: 'error_layout'
}
</script>