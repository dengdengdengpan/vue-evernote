<template>
    <div id="note-detail">
        <h1>
            {{ message }} : {{ $route.params.noteId }}
        </h1>
    </div>
</template>

<script>
export default {
    name: 'NoteDetail',
    data () {
        return {
            message: '笔记详情页面'
        }
    }
}
</script>

<style scoped>
h1 {
    color: orange;
}
</style>

