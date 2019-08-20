<template>
    <div class=card>
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