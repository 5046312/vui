<template>
    <span class='vui-tag' :class='type' :style="tagStyle">
        <slot />
    </span>
</template>
<script>
export default {
    name: 'v-tag',
    props: {
        type: {
            default: 'default'
        },
        size: {
            default: 12,
        }
    },
    computed: {
        tagStyle(){
            return {
                fontSize: this.size + 'px',
                padding: this.size / 3 + 'px ' + this.size / 2 + 'px'
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../../styles/components/tag";
</style>
