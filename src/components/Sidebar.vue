<template>
    <div id="sidebar">
        <div class="edit-icons">
            <router-link to="/note/:noteId">
                <svg class="icon icon-allnotes" aria-hidden="true">
                    <use xlink:href="#icon-allnotes"></use>
                </svg>
                <span>全部笔记</span>
            </router-link>
            <router-link to="/notebooks">
                <svg class="icon icon-notebook" aria-hidden="true">
                    <use xlink:href="#icon-notebook"></use>
                </svg>
                <span>笔记本</span>
            </router-link>
            <router-link to="/tarsh/:noteId">
                <svg class="icon icon-trash" aria-hidden="true">
                    <use xlink:href="#icon-trash"></use>
                </svg>
                <span>废纸篓</span>
            </router-link>
        </div>
        <div class="logout">
            <svg class="icon icon-logout" aria-hidden="true">
                <use xlink:href="#icon-logout"></use>
            </svg>
            <span>注销</span>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#sidebar {
    display: flex;
    flex-direction: column;
    width: 120px;
    background-color: #2A333C;
    color: #F4F8FF;
}
#sidebar .edit-icons {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}
#sidebar .edit-icons > a {
    display: block;
    margin-bottom: 5px;
    padding: 5px 0 5px 20px;
}
#sidebar .edit-icons .router-link-active {
    background-color: #474E57;
}
#sidebar .logout {
    padding: 10px 0 20px 20px;
    border-top: 1px solid #3D4650;
    cursor: pointer;
}
#sidebar .icon {
    fill: #F4F8FF;
}
</style>
