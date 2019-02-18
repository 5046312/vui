<template>
    <div class='vui-option' @mouseenter="clearOthersAndHover" :class="{hover, disabled, select: $parent.value == this.value}" @click="select">
        {{label}}
    </div>
</template>
<script>
export default {
    name: "v-option",
    props: {
        value: String,
        label: String,
        disable: { default: null }, // 禁用
    },
    data(){
        return {
            hover: false,
        }
    },
    mounted(){
        this.$parent.list.push(this.$props)
    },
    methods: {
        select(){
            if(this.disabled) return 
            this.$parent.select(this.$props)
        },
        // 清除其他hover，在设置当前hover
        clearOthersAndHover(){
            if(this.disabled) return
            this.$parent.$slots.default.map(vnode => vnode.componentInstance.hover = false)
            this.hover = true
        }
    },
    computed: {
        // 禁用
        disabled(){
            if(this.disable !== null){
                return true
            }else{
                return false
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../../styles/components/select";
</style>
