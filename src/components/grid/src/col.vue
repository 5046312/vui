<template>
    <div id="vui-col" :style="{width: _width, paddingLeft: padding, paddingRight: padding, order, marginLeft: _offset}">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "v-col",
    props: {
        // 所占份数，共12份
        width: {
            default: 12
        },
        order: {
            default: 0,
        },
        offset: {
            default: 0,
        }
    },
    data() {
        return {};
    },
    methods: {},
    computed: {
        // 根据传入份数，计算width百分比
        _width() {
            return ((this.width / 12) * 100).toFixed(20) + "%";
        },
        // 获取父组件间隔 / 2
        padding() {
            return this.$parent.gutter / 2 + "px";
        },
        // 向右偏移宽度
        _offset(){
            return ((this.offset / 12) * 100).toFixed(20) + "%";
        }
    }
};
</script>
<style lang="scss">
@import "../../../styles/components/grid";
</style>