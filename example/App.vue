<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    created() {}
};
</script>

<style lang='scss' scope>
html,
body{
    height: 100%;
    width: 100%;
    overflow-x: auto;
}
#app{
    height: 100%;
    .main-contain{
        padding: 0;
    }
}
</style>
