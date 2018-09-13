<template>
    <div class="avatar flex-center" :title="user.username">
        {{ slogan }}
    </div>
</template>

<script>
export default {
    data () {
        return {
            user: {
                username: 'dengpan'
            },
            slogan: 'D'
        }
    }
}
</script>

<style lang="scss" scoped>
div.avatar {
    width: 30px;
    height: 30px;
    margin: 20px auto;
    border-radius: 50%;
    background-color: #2DBE60;
    text-transform: uppercase;
    color: #333;
    font-size: 18px;
    font-weight: bold;
}
</style>
