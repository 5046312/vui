<template>
    <div
        class="vui-row"
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
        // start|end|center|between|around
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
            // top|center|bottom
            let value;
            switch (this.align) {
                case "center":
                    value = "center";
                    break;
                case "bottom":
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