<template>
    <div
        id="vui-row"
        :style="{paddingLeft: _margin, paddingRight: _margin, justifyContent: _flex_content, alignItems:_align_items}"
    >
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
        },
        // justify-content
        justify: {
            default: "start"
        },
        // align-items
        align: {
            default: "top"
        }
    },
    data() {
        return {};
    },
    methods: {},
    computed: {
        _margin() {
            return this.margin + "px";
        },
        // 对其方式
        _flex_content() {
            // 5种可能
            // flex-start|flex-end|center|space-between|space-around
            let value;
            switch (this.justify) {
                case "end":
                    value = "flex-end";
                    break;
                case "center":
                    value = "center";
                    break;
                case "between":
                    value = "space-between";
                    break;
                case "around":
                    value = "space-around";
                    break;
                default:
                    value = "flex-start";
            }
            return value;
        },
        // 垂直对其方式
        _align_items() {
            // stretch|center|flex-start|flex-end|baseline
            let value;
            switch (this.align) {
                case "stretch":
                    value = "stretch";
                    break;
                case "center":
                    value = "center";
                    break;
                case "baseline":
                    value = "baseline";
                    break;
                case "start":
                    value = "flex-start";
                    break;
                case "end":
                    value = "flex-end";
                    break;
                default:
                    value = "flex-start";
            }
            return value;
        }
    }
};
</script>
<style lang="scss">
@import "../../../styles/components/grid";
</style>