<template>
    <div id="trash-detail">
        <h1>
            {{ message }} : {{ $route.params.noteId }}
        </h1>
    </div>
</template>

<script>
export default {
    name: 'TrashDetail',
    data () {
        return {
            message: '回收站笔记详情页面'
        }
    }
}
</script>

<style scoped>
h1 {
    color: skyblue;
}
</style>
