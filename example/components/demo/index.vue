<template>
    <div id="vui-demo">
        <div class="panel">
            <div class="left">
                <div class="desc" ref="desc" v-show="$slots.desc">
                    <slot name="desc"></slot>
                </div>
                <div class="show-style" ref="style" v-show="$slots.default" :style="{background: bgColor}">
                    <slot></slot>
                </div>
            </div>
            <div class="right" v-show="code" :style="{height}" :class="{transition}">
                <div class="origin-code">
                    <v-code :code="code" ref="origin" :class="{allHeight: leftHeighter}"></v-code>
                </div>
            </div>
            <div
                v-show="code"
                class="show-control"
                @click="show = !show"
            >{{show ? "Talk is cheap" : "Show me the code"}}</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        code: {
            default: ""
        },
        bgColor: {
            default: '#fff'
        }
    },
    data() {
        return {
            show: false,
            leftHeight: 0,
            leftHeighter: false, // 左侧比右侧高
            transition: false // 展开动画
        };
    },
    watch: {
        show() {
            this.transition = true;
        }
    },
    mounted() {
        // 获取左侧高度，为右侧伸缩做准备
        this.leftHeight =
            this.$refs.desc.offsetHeight + this.$refs.style.offsetHeight - 40;
        // 判断是否左侧比右侧更高
        this.leftHeighter =
            this.leftHeight > this.$refs.origin.$el.offsetHeight;
    },
    methods: {},
    computed: {
        // .origin-code 高度
        height() {
            if (this.show) {
                // 展开，则origin-code高度为源码高度
                return this.leftHeighter
                    ? this.leftHeight + "px"
                    : this.originHeight + "px";
            } else {
                // 未展开时
                return this.leftHeight + "px";
            }
        },
        originHeight() {
            return this.$refs.origin.$el.offsetHeight;
        }
    }
};
</script>
<style lang="scss" scoped>
#vui-demo {
    position: relative;
    padding: 20px;
    &>.panel {
        transition: all 0.7s;
        border-radius: 3px;
        cursor: default;
        display: flex;
        border: 1px solid #eee;

        & > .left,
        & > .right {
            background: #fff;
            flex: 1;
        }
        & > .right {
            position: relative;
            overflow: hidden;
            padding-bottom: 40px;
            &.transition {
                transition: all 0.5s;
            }
        }
        .desc {
            padding: 20px;
            border-bottom: 1px solid #eee;
        }
        .show-style {
            padding: 30px 20px;
        }
        .origin-code {
            box-sizing: border-box;
            background: #eeeeff;
            overflow: hidden;
            height: 100%;
        }
        // 展开按钮
        .show-control {
            position: absolute;
            bottom: 20px;
            left: 50%;
            right: 20px;
            height: 41px;
            background: #1e90ff;
            transition: all 0.7s;
            text-align: center;
            line-height: 40px;
            color: #fff;
            font-size: 14px;
            user-select: none;
            &:hover {
                background: #70a1ff;
            }
        }
        &:hover {
            transition: all .22s;
            box-shadow: 2px 2px 10px rgba(60, 60, 60, 0.3);
            border: 1px solid rgba(0, 0, 0, 0.1);
        }
    }
    &>.allHeight {
        height: 100%;
    }
}
</style>