<template>
    <div class="vui-sliderbox">
        <div class='slider' :style="sliderboxStyle">
            <slot></slot>
        </div>
        <div class='nav'>
            <div class='left' @click='prev'><v-icon type="ios-arrow-back" /></div>
            <div class='right' @click='next'><v-icon type="ios-arrow-forward" /></div>
        </div>
        <div class='step'>
            <div class='dot' :class="{active: _index == index}" v-for="(item, _index) in total" :key="_index" @click="index = _index"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: "v-sliderbox",
    props: {},
    data(){
        return {
            index: 0, // 当前索引
            total: 3, // 总页数
            width: 0, // 单个slider宽度
        }
    },
    mounted(){
        this.total = this.$slots.default.length
    },
    methods: {
        // 上一页
        prev(){
            this.index --
            if(this.index < 0) this.index = this.total - 1
        },

        // 下一页
        next(){
            this.index ++
            if(this.index > this.total - 1) this.index = 0
        }
    },
    computed: {
        sliderboxStyle(){
            return {
                left: `-${this.index * 100}%`
            }
        }
    }
};
</script>
<style lang="scss" scoped>
@import "../../../styles/components/sliderbox";
</style>
