<template>
    <div class='vui-select' :class="{ disabled: disable }"  @blur="showOptions = false" tabindex="0">
        <div class='main' :class="{active: showOptions}" @mouseover="hover = true" @mouseleave="hover = false">
            <div class='value' @click="switchShowOptions">
                <span v-show="label">{{label}}</span>
                <span class='empty' v-show="!label">请选择</span>
            </div>
            <div class='arrow' v-show="!label || !del || !hover" :class='{down: showOptions}' @click="switchShowOptions">
                <v-icon type="ios-arrow-down" />
            </div>
            <div class='del' v-show="del && hover && label" @click='showOptions = false;$emit("input", "")'>
                <v-icon type="ios-close-circle" />
            </div>
        </div>
        <div class='option-panel' v-show="showOptions">
            <div class='angle'></div>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: "v-select",
    props: {
        value: String,
        disable: Boolean, // 禁用
        del: Boolean, // 显示删除按钮
    },
    data(){
        return {
            list: [], // 子组件会注册到这个数组中
            showOptions: false,
            hover: false
        }
    },
    methods: {
        // select处理option数据（由组件option调用）
        select(obj){
            // {label, value}
            this.showOptions = false
            this.$emit("input", obj.value)
        },
        // 显示与隐藏 options
        switchShowOptions(){
            if(this.disable) return
            this.showOptions = !this.showOptions
        }
    },
    computed: {
        label(){
            let labelString = ''
            this.list.map(obj => {
                if(obj.value == this.value){
                    labelString = obj.label
                }
            })
            return labelString
        },
    }
}
</script>
<style lang="scss" scoped>
@import "../../../styles/components/select";
</style>
