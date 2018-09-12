<template>
    <div id="app">
        <Sidebar></Sidebar>
        <router-view></router-view>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar';
export default {
    name: 'App',
    components: {
        Sidebar
    }
}
</script>

<style>
/* common css */
.icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}

/* #app css*/
#app {
    display: flex;
    align-items: stretch;
}
#app #sidebar {
    flex-shrink: 0;
}
</style>
