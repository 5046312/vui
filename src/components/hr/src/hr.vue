<template>
    <div class='vui-hr' :class="className">
        <span :style="spanStyle">
            <slot></slot>
        </span>
    </div>
</template>
<script>
export default {
    name: 'v-hr',
    props: {
        position: {
            default: 'center'
        },
        margin: {
            default: '10'
        }
    },
    computed: {
        className(){
            return 'vui-hr-' + this.position
        },
        spanStyle(){
            return {
                marginLeft: this.margin + 'px',
                marginRight: this.margin + 'px',
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../../styles/components/hr.scss';
</style>
