<template>
    <div class="layout">
        <ul class="menu">
            <router-link
                :to="item.path"
                tag="li"
                v-for="item in route"
                :key="item.path"
            >{{item.meta.title}}</router-link>
        </ul>
        <router-view class="component"></router-view>
    </div>
</template>
<script>
import route from "./route";
export default {
    data() {
        return { route };
    }
};
</script>
<style lang="scss" scoped>
.layout {
    display: flex;
}
.layout > .menu {
    width: 200px;
    cursor: pointer;
    background: #f9f9f9;
    margin: 0;
}
.menu > li {
    padding: 10px;
}
li:hover {
    color: #1e90ff;
}
.layout > .component {
    flex: 1;
    padding: 20px;
    box-sizing: border-box;
}
</style>
