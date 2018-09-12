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
    background-color: #f2b81c;
    text-shadow: 1px 0 1px #85661d;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: bold;
}
</style>
