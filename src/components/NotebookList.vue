<template>
    <div id="notebook-list">
        <h1>{{ message }}</h1>
        <ul>
            <li>
                <router-link to="/note/1">笔记本 1</router-link>
                <router-link to="/note/2">笔记 2</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data () {
        return {
            message: '笔记本列表'
        }
    }
}
</script>

<style scoped>
h1 {
    color: green;
}
</style>
