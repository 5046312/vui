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
                    <v-code :code="code" ref="origin" :class="{allHeight: leftHeighter}"></v-code>
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
            leftHeighter: false, // 左侧比右侧高
            transition: false, // 展开动画
        };
    },
    watch: {
        show() {
            this.transition = true;
        }
    },
    mounted() {
        // 获取左侧高度，为右侧伸缩做准备
        this.leftHeight = this.$refs.desc.offsetHeight + this.$refs.style.offsetHeight - 40;

        // 判断是否左侧比右侧更高
        this.leftHeighter = this.leftHeight > this.$refs.origin.$el.offsetHeight

    },
    methods: {},
    computed: {
        // .origin-code 高度
        height() {
            if (this.show) {
                // 展开，则origin-code高度为源码高度
                return this.leftHeighter ? this.leftHeight + "px" : this.originHeight + "px"
            } else {
                // 未展开时
                return this.leftHeight + "px";
            }
        },
        originHeight() {
            return this.$refs.origin.$el.offsetHeight;
        },
    }
};
</script>
<style lang="scss" scoped>
@import "../../../styles/components/codepanel";
.allHeight{
    height: 100%;
}
</style>