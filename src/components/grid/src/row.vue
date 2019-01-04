<template>
    <div id="vui-row" :style="{paddingLeft: _margin, paddingRight: _margin}">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "v-row",
    props: {
        // 间隔
        gutter: {
            default: 0
        },
        // 左右外边距
        margin: {
            default: 0
        }
    },
    data() {
        return {};
    },
    methods: {},
    computed: {
        _margin() {
            return this.margin + "px";
        }
    }
};
</script>
<style lang="scss">
@import "../../../styles/components/grid";
</style>