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

<style>
html,
body{
    height: 100%;
    width: 100%;
    color: #333;
    font-size: 15px;
    overflow-x: auto;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    font-family: PingFang SC, Helvetica Neue, Arial, sans-serif;
}
#app{
    height: 100%;
}
</style>
