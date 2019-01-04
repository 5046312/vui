<template>
    <div id="vui-code-panel">
        <div class="panel">
            <div class="left">
                <div class="desc" ref="desc">
                    <slot name="desc"></slot>
                </div>
                <div class="show-style" ref="style">
                    <slot></slot>
                </div>
            </div>
            <div class="right">
                <div :style="{height}" class="origin-code" :class="{transition}">
                    <v-code :code="code" ref="origin"></v-code>
                </div>
                <div class="show-control" @click="show = !show">{{show ? "收起源码" : "展开源码"}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "v-codepanel",
    props: {
        code: String
    },
    data() {
        return {
            show: false,
            leftHeight: 0,
            transition: false
        };
    },
    watch: {
        show() {
            this.transition = true;
        }
    },
    mounted() {
        this.leftHeight =
            this.$refs.desc.offsetHeight + this.$refs.style.offsetHeight - 40;
        window.onresize = () => {
            this.leftHeight =
                this.$refs.desc.offsetHeight +
                this.$refs.style.offsetHeight -
                40;
        };
    },
    methods: {},
    computed: {
        // .origin-code 高度
        height() {
            if (this.show) {
                // 展开，则origin-code高度为源码高度
                return this.$refs.origin.$el.offsetHeight;
            } else {
                // 未展开时
                // if (
                //     this.leftHeight &&
                //     this.leftHeight > this.$refs.origin.$el.offsetHeight
                // ) {
                //     // 左侧大于右侧
                // }
                return this.leftHeight + "px";
            }
        }
    }
};
</script>
<style lang="scss" scoped>
@import "../../../styles/components/codepanel";
</style>