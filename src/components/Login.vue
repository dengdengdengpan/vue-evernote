<template>
    <div id="login">
        <h1>{{ message }}</h1>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data () {
        return {
            message: 'this is login page'
        }
    }
}
</script>

<style scoped>
h1 {
    color: pink;
}
</style>


