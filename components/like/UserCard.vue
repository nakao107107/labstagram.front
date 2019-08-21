<template>
    <div class=card>
        <img :src="`https://github.com/${like.user.github_id}.png`">
        <p>{{like.user.name}}</p>
    </div>
</template>

<script>
export default {
    
    props: [
        "like"
    ]
}
</script>

<style scoped>
</style>