<template>
    <div class="vui-slider" :style="sliderStyle">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "v-slider",
    props: {},
    data(){
        return {
            sliderStyle: { height: 0, width: 0},
        }
    },
    mounted(){
        this.sliderStyle.height = this.$parent.$el.offsetHeight + 'px'
        this.sliderStyle.width = this.$parent.$el.offsetWidth + 'px'
    },
    computed: {
    }
};
</script>
<style lang="scss" scoped>
@import "../../../styles/components/sliderbox";
</style>
