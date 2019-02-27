<template>
    <span class='vui-dot' :class="type" :style="dotStyle">
        <slot />
    </span>
</template>
<script>
export default {
    name: 'v-dot',
    props: {
        type: {
            default: 'default'
        },
        size: {
            default: 12,
        },
        left: { default: null },
        right: { default: null }
    },
    data(){
        return {
            leftRadius: false,
            rightRadius: false,
        }
    },
    mounted(){
        if(this.left === ''){
            this.leftRadius = true
            this.rightRadius = false
        }
        if(this.right === ''){
            this.leftRadius = false
            this.rightRadius = true
        }
    },
    computed: {
        dotStyle(){
            const style = {
                padding: this.$slots.default ? '1px ' + this.size / 1.6 + 'px' : this.size / 2 + 'px',
                fontSize: this.size + 'px',
                borderRadius: '99999px'
            }
            if(this.leftRadius){
                style.borderRadius = '999999px 0 0 999999px'
                style.padding = `1px ${this.size / 1.5}px 1px ${this.size / 1}px`
            }
            if(this.rightRadius){
                style.borderRadius = '0 999999px 999999px 0'
                style.padding = `1px ${this.size / 1}px 1px ${this.size / 1.5}px`
            }
            return style
        }
    }
}
</script>