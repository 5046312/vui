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
}
.layout > .component {
    flex: 1;
    padding: 50px;
}
</style>
