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
        }
    },
    mounted(){
    },
    computed: {
        dotStyle(){
            return {
                padding: this.$slots.default ? '0 ' + this.size / 2 + 'px' : this.size / 2 + 'px',
                fontSize: this.size + 'px',
                borderRadius: '99999px'
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../../styles/components/dot";
</style>
